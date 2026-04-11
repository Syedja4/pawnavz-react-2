import { useEffect, useRef } from "react";

const COLOR = "255,122,0";
const DEPTH_LEVELS = [0.4, 0.7, 1];
const LOGO_SRC = "/paw-favicon.svg";
const LOGO_TEXT = "pawnavz";
const PHASE_DURATIONS = {
  float: 4500,
  assemble: 2000,
  hold: 1000,
  dissolve: 1000,
};

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
const lerp = (start, end, amount) => start + (end - start) * amount;
const easeInOut = (t) => (t < 0.5 ? 2 * t * t : 1 - ((-2 * t + 2) ** 2) / 2);
const PHASE_EASE_MS = 700;
const FPS = 60;
const FRAME_INTERVAL = 1000 / FPS;
const MOUSE_THROTTLE_MS = 16;

const getParticleBudget = (screenWidth, screenHeight, lowEndDevice) => {
  const areaFactor = clamp((screenWidth * screenHeight) / (1920 * 1080), 0, 1);
  let minCount = 100;
  let maxCount = 140;

  if (screenWidth < 768) {
    minCount = 40;
    maxCount = 70;
  } else if (screenWidth < 1024) {
    minCount = 70;
    maxCount = 100;
  }

  let count = Math.round(lerp(minCount, maxCount, areaFactor));
  if (lowEndDevice) {
    count = Math.max(40, Math.floor(count * 0.7));
  }
  return count;
};

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const mouse = useRef({ x: null, y: null });
  const animationFrameId = useRef(null);
  const phaseStart = useRef(0);
  const phase = useRef("float");
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  useEffect(() => {
    if (isMobile) return () => {};

    const canvas = canvasRef.current;
    if (!canvas) return () => {};
    const ctx = canvas.getContext("2d");
    if (!ctx) return () => {};

    let width = 0;
    let height = 0;
    let dpr = 1;
    let logoPoints = [];
    let textPoints = [];
    let frameId = 0;
    let lastFrameTime = 0;
    let lastMouseMove = 0;
    const lowEndDevice = (navigator.hardwareConcurrency || 8) <= 4;
    const logoCanvas = document.createElement("canvas");
    const textCanvas = document.createElement("canvas");
    const logoCtx = logoCanvas.getContext("2d");
    const textCtx = textCanvas.getContext("2d");

    const switchPhase = (nextPhase, time) => {
      phase.current = nextPhase;
      phaseStart.current = time;

      if (nextPhase === "assemble" || nextPhase === "hold") {
        assignTextTargets();
      }

      if (nextPhase === "hold") {
        particles.current.forEach((p) => {
          p.vx *= 0.2;
          p.vy *= 0.2;
        });
      }

      if (nextPhase === "dissolve") {
        const centerX = width / 2;
        const centerY = height / 2;
        particles.current.forEach((p) => {
          let dx = p.x - centerX;
          let dy = p.y - centerY;
          const distSq = dx * dx + dy * dy;
          const dist = distSq > 0 ? Math.sqrt(distSq) : 1;
          if (dist < 0.0001) {
            const randomAngle = Math.random() * Math.PI * 2;
            dx = Math.cos(randomAngle);
            dy = Math.sin(randomAngle);
          } else {
            dx /= dist;
            dy /= dist;
          }

          const burst = 0.5 + Math.random() * 0.7;
          p.vx += dx * burst;
          p.vy += dy * burst;
          p.baseX = Math.random() * width;
          p.baseY = Math.random() * height;
        });
      }
    };

    const assignTextTargets = () => {
      if (!textPoints.length || !particles.current.length) return;
      const textLength = textPoints.length;
      const particleCount = particles.current.length;
      particles.current.forEach((p, i) => {
        const targetIndex = Math.floor((i / particleCount) * textLength) % textLength;
        const target = textPoints[targetIndex];
        p.targetX = target.x;
        p.targetY = target.y;
      });
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.offsetWidth || canvas.parentElement?.offsetWidth || 0;
      height = canvas.offsetHeight || canvas.parentElement?.offsetHeight || 0;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (logoPoints.length && !particles.current.length) {
        initParticlesFromLogo();
      }
      if (width > 0 && height > 0) {
        textPoints = extractTextPoints();
        if (phase.current === "assemble" || phase.current === "hold") {
          assignTextTargets();
        }
      }
    };

    const extractLogoPoints = (image) => {
      if (!logoCtx) return;

      const targetSize = Math.min(width, height) * 0.28;
      const scale = Math.min(targetSize / image.width, targetSize / image.height);
      const drawW = image.width * scale;
      const drawH = image.height * scale;

      logoCanvas.width = Math.max(1, Math.floor(drawW));
      logoCanvas.height = Math.max(1, Math.floor(drawH));
      logoCtx.clearRect(0, 0, logoCanvas.width, logoCanvas.height);
      logoCtx.drawImage(image, 0, 0, logoCanvas.width, logoCanvas.height);

      const { data } = logoCtx.getImageData(0, 0, logoCanvas.width, logoCanvas.height);
      const step = Math.max(1, Math.floor(logoCanvas.width / 70));
      const points = [];

      for (let y = 0; y < logoCanvas.height; y += step) {
        for (let x = 0; x < logoCanvas.width; x += step) {
          const idx = (y * logoCanvas.width + x) * 4 + 3;
          if (data[idx] > 20) {
            points.push({ x, y });
          }
        }
      }

      const offsetX = width / 2 - logoCanvas.width / 2;
      const offsetY = height / 2 - logoCanvas.height / 2 - 10;
      logoPoints = points.map((p) => ({
        x: p.x + offsetX,
        y: p.y + offsetY,
      }));
    };

    const extractTextPoints = () => {
      if (!textCtx || width < 1 || height < 1) return [];

      textCanvas.width = width;
      textCanvas.height = height;
      textCtx.clearRect(0, 0, textCanvas.width, textCanvas.height);
      textCtx.textAlign = "center";
      textCtx.textBaseline = "middle";
      textCtx.fillStyle = "#ffffff";
      const fontSize = Math.floor(clamp(width * 0.16, 120, 180));
      textCtx.font = `700 ${fontSize}px sans-serif`;
      textCtx.fillText(LOGO_TEXT, textCanvas.width / 2, textCanvas.height / 2);

      const { data } = textCtx.getImageData(0, 0, textCanvas.width, textCanvas.height);
      const points = [];
      const step = Math.max(2, Math.floor(fontSize / 24));
      const alphaThreshold = 35;

      for (let y = 0; y < textCanvas.height; y += step) {
        for (let x = 0; x < textCanvas.width; x += step) {
          const idx = (y * textCanvas.width + x) * 4 + 3;
          if (data[idx] > alphaThreshold) {
            points.push({ x, y });
          }
        }
      }

      return points;
    };

    const initParticlesFromLogo = () => {
      if (!logoPoints.length) return;
      const budget = getParticleBudget(width, height, lowEndDevice);
      const count = Math.min(logoPoints.length, budget);
      const particleArray = new Array(count);

      for (let i = 0; i < count; i += 1) {
        const pointIndex = Math.floor((i / count) * logoPoints.length);
        const point = logoPoints[pointIndex];
        const depth = DEPTH_LEVELS[i % DEPTH_LEVELS.length];
        particleArray[i] = {
          x: point.x,
          y: point.y,
          baseX: point.x,
          baseY: point.y,
          vx: 0,
          vy: 0,
          depth,
          size: 0.3 + Math.random() * 0.7,
          opacity: 0.35 + Math.random() * 0.45,
          driftAngle: Math.random() * Math.PI * 2,
          targetX: point.x,
          targetY: point.y,
        };
      }

      particles.current = particleArray;
      switchPhase("float", performance.now());
      disperseParticles();
    };

    const disperseParticles = () => {
      particles.current.forEach((p) => {
        const angle = Math.random() * Math.PI * 2;
        const strength = 0.6 + Math.random() * 0.6;
        p.vx += Math.cos(angle) * strength;
        p.vy += Math.sin(angle) * strength;
        p.baseX = Math.random() * width;
        p.baseY = Math.random() * height;
      });
    };

    const handleMouseMove = (e) => {
      const now = performance.now();
      if (now - lastMouseMove < MOUSE_THROTTLE_MS) return;
      lastMouseMove = now;
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.current.x = null;
      mouse.current.y = null;
    };

    const animate = (time) => {
      frameId = requestAnimationFrame(animate);

      if (document.visibilityState !== "visible") return;
      if (time - lastFrameTime < FRAME_INTERVAL) return;
      lastFrameTime = time;

      ctx.clearRect(0, 0, width, height);

      const elapsed = time - phaseStart.current;
      if (elapsed > PHASE_DURATIONS[phase.current]) {
        if (phase.current === "float") {
          switchPhase("assemble", time);
        } else if (phase.current === "assemble") {
          switchPhase("hold", time);
        } else if (phase.current === "hold") {
          switchPhase("dissolve", time);
        } else {
          switchPhase("float", time);
        }
      }

      const phaseEase = easeInOut(clamp(elapsed / PHASE_EASE_MS, 0, 1));

      const radius = 160;
      const baseFriction = 0.9;
      const phaseFriction =
        phase.current === "assemble" ? 0.88 : phase.current === "hold" ? 0.92 : 0.9;
      const friction = lerp(baseFriction, phaseFriction, phaseEase);
      const returnStrength = 0.01;
      const baseMaxSpeed = 1.1;
      const phaseMaxSpeed =
        phase.current === "assemble" ? 3 : phase.current === "dissolve" ? 2.6 : 1.1;
      const maxSpeed = lerp(baseMaxSpeed, phaseMaxSpeed, phaseEase);
      const maxSpeedSq = maxSpeed * maxSpeed;
      const dissolveProgress =
        phase.current === "dissolve"
          ? clamp((time - phaseStart.current) / PHASE_DURATIONS.dissolve, 0, 1)
          : 0;
      const radiusSq = radius * radius;
      const inFloat = phase.current === "float";
      const inAssemble = phase.current === "assemble";
      const inHold = phase.current === "hold";
      const inDissolve = phase.current === "dissolve";
      const mouseX = mouse.current.x;
      const mouseY = mouse.current.y;
      const hasMouse = mouseX !== null && mouseY !== null;
      const particleList = particles.current;
      const particleCount = particleList.length;

      ctx.fillStyle = `rgb(${COLOR})`;
      for (let i = 0; i < particleCount; i += 1) {
        const p = particleList[i];

        if (inFloat) {
          p.driftAngle += 0.002 * p.depth;
          p.vx += Math.cos(p.driftAngle) * 0.01 * p.depth;
          p.vy += Math.sin(p.driftAngle) * 0.01 * p.depth;
        }

        if (inFloat && hasMouse) {
          const dx = mouseX - p.x;
          const dy = mouseY - p.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < radiusSq) {
            const dist = Math.sqrt(distSq) || 1;
            const force = (radius - dist) / radius;
            p.vx += dx * force * 0.002 * p.depth;
            p.vy += dy * force * 0.002 * p.depth;
          }
        }

        if (inAssemble) {
          const dx = p.targetX - p.x;
          const dy = p.targetY - p.y;
          p.vx += dx * (0.02 * phaseEase);
          p.vy += dy * (0.02 * phaseEase);
        }

        if (inHold) {
          const dx = p.targetX - p.x;
          const dy = p.targetY - p.y;
          p.vx += dx * (0.05 * phaseEase);
          p.vy += dy * (0.05 * phaseEase);
          p.vx += (Math.random() - 0.5) * 0.008 * phaseEase;
          p.vy += (Math.random() - 0.5) * 0.008 * phaseEase;
        }

        if (inDissolve) {
          const pullStrength = (0.006 + dissolveProgress * 0.02) * phaseEase;
          p.x += (p.baseX - p.x) * pullStrength;
          p.y += (p.baseY - p.y) * pullStrength;
          p.driftAngle += 0.0015 * p.depth;
          p.vx += Math.cos(p.driftAngle) * 0.006 * p.depth * phaseEase;
          p.vy += Math.sin(p.driftAngle) * 0.006 * p.depth * phaseEase;
        }

        p.vx *= friction;
        p.vy *= friction;

        const speedSq = p.vx * p.vx + p.vy * p.vy;
        if (speedSq > maxSpeedSq) {
          const scale = maxSpeed / Math.sqrt(speedSq);
          p.vx *= scale;
          p.vy *= scale;
        }

        p.x += p.vx;
        p.y += p.vy;

        if (inFloat) {
          p.x += (p.baseX - p.x) * returnStrength;
          p.y += (p.baseY - p.y) * returnStrength;
        }

        ctx.globalAlpha = p.opacity;
        if (p.size <= 1.2) {
          const size = p.size * 2;
          ctx.fillRect(p.x - p.size, p.y - p.size, size, size);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
    };

    const img = new Image();
    img.onload = () => {
      resize();
      extractLogoPoints(img);
      textPoints = extractTextPoints();
      initParticlesFromLogo();
      frameId = requestAnimationFrame(animate);
      animationFrameId.current = frameId;
    };
    img.src = LOGO_SRC;

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(frameId || animationFrameId.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (isMobile) return null;

  return <canvas ref={canvasRef} className="particle-bg" />;
};

export default ParticleBackground;
