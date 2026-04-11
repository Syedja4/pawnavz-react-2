import React, { useEffect, useRef, useState } from 'react'

export default function DeferredRender({
  children,
  className,
  minHeight = 0,
  rootMargin = '280px 0px',
}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isVisible) return undefined

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true)
      return undefined
    }

    const node = ref.current

    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        setIsVisible(true)
        observer.disconnect()
      },
      { rootMargin }
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [isVisible, rootMargin])

  return (
    <div
      ref={ref}
      className={className}
      style={isVisible ? undefined : { minHeight }}
    >
      {isVisible ? children : null}
    </div>
  )
}
