import React, { lazy, Suspense, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import DeferredRender from './components/DeferredRender'
import Navbar from './components/Navbar'
import { CartProvider, useCartUi } from './context/CartContext'
import { ThemeProvider } from './context/ThemeContext'
import { ToastProvider, useToastState } from './context/ToastContext'

const HomePage = lazy(() => import('./pages/HomePage'))
const ShopPage = lazy(() => import('./pages/ShopPage'))
const ProductPage = lazy(() => import('./pages/ProductPage'))
const CartPage = lazy(() => import('./pages/CartPage'))
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'))
const OrderSuccessPage = lazy(() => import('./pages/OrderSuccessPage'))
const FeaturesPage = lazy(() => import('./pages/FeaturesPage'))
const GpsTrackingPage = lazy(() => import('./pages/features/GpsTrackingPage'))
const HealthMonitoringPage = lazy(() => import('./pages/features/HealthMonitoringPage'))
const SmartFeedingPage = lazy(() => import('./pages/features/SmartFeedingPage'))
const MobileAppPage = lazy(() => import('./pages/features/MobileAppPage'))
const VetApprovedPage = lazy(() => import('./pages/features/VetApprovedPage'))
const SmartAlertsPage = lazy(() => import('./pages/features/SmartAlertsPage'))
const AnalyticsDashboardPage = lazy(() => import('./pages/features/AnalyticsDashboardPage'))
const TemperatureMonitoringPage = lazy(() => import('./pages/features/TemperatureMonitoringPage'))
const VetConnectPage = lazy(() => import('./pages/features/VetConnectPage'))
const AppPage = lazy(() => import('./pages/AppPage'))
const PricingPage = lazy(() => import('./pages/PricingPage'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const CareersPage = lazy(() => import('./pages/CareersPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const AuthPage = lazy(() => import('./pages/AuthPage'))
const ComingSoonPage = lazy(() => import('./pages/ComingSoonPage'))
const LegalPage = lazy(() => import('./pages/LegalPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))
const CartSidebar = lazy(() => import('./components/CartSidebar'))
const Toast = lazy(() => import('./components/Toast'))
const Footer = lazy(() => import('./components/Footer'))

const HIDE_FOOTER_ROUTES = ['/auth', '/checkout', '/order-success']

const STATIC_PAGE_TITLES = {
  '/': 'Pawnavz - Smart Pet Technology',
  '/shop': 'Pet Products - Pawnavz',
  '/cart': 'Shopping Cart - Pawnavz',
  '/checkout': 'Secure Checkout - Pawnavz',
  '/order-success': 'Order Confirmed - Pawnavz',
  '/features': 'Features - Pawnavz Pet Technology',
  '/features/gps-tracking': 'Live GPS Tracking - Pawnavz',
  '/features/health-monitoring': 'Health Monitoring - Pawnavz',
  '/features/smart-feeding': 'Smart Feeding - Pawnavz',
  '/features/mobile-app': 'Mobile App - Pawnavz',
  '/features/vet-approved': 'Vet Approved - Pawnavz',
  '/features/smart-alerts': 'Smart Alerts - Pawnavz',
  '/features/analytics-dashboard': 'Analytics Dashboard - Pawnavz',
  '/features/temperature-monitoring': 'Temperature Monitoring - Pawnavz',
  '/features/vet-connect': 'Vet Connect - Pawnavz',
  '/app': 'Pawnavz Mobile App - Smart Pet Care',
  '/pricing': 'Pricing - Pawnavz',
  '/blog': 'Pet Care Blog - Pawnavz',
  '/about': 'About Pawnavz - Pet Technology Company',
  '/careers': 'Careers - Pawnavz',
  '/contact': 'Contact Pawnavz',
  '/auth': 'Sign In - Pawnavz',
  '/gps-tracker': 'Pawnavz GPS Pet Tracker',
  '/smart-bowl': 'Pawnavz Smart Pet Bowl',
  '/privacy-policy': 'Privacy Policy - Pawnavz',
  '/terms': 'Terms & Conditions - Pawnavz',
  '/shipping': 'Shipping Policy - Pawnavz',
  '/refunds': 'Refund Policy - Pawnavz',
}

function getPageTitle(pathname) {
  if (/^\/product\/\d+$/.test(pathname)) return 'Product Details - Pawnavz'
  if (/^\/blog\/\d+$/.test(pathname)) return 'Pet Care Article - Pawnavz'

  return STATIC_PAGE_TITLES[pathname] || 'Pawnavz - Smart Pet Technology'
}

function RouteFallback() {
  return <div className="page" aria-busy="true" />
}

function CartSidebarGate() {
  const { cartOpen } = useCartUi()

  if (!cartOpen) return null

  return (
    <Suspense fallback={null}>
      <CartSidebar />
    </Suspense>
  )
}

function ToastGate() {
  const toast = useToastState()

  if (!toast) return null

  return (
    <Suspense fallback={null}>
      <Toast />
    </Suspense>
  )
}

function AppShell() {
  const location = useLocation()
  const showFooter = !HIDE_FOOTER_ROUTES.includes(location.pathname)

  useEffect(() => {
    document.title = getPageTitle(location.pathname)
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <Navbar />
      <CartSidebarGate />
      <ToastGate />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-success" element={<OrderSuccessPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/features/gps-tracking" element={<GpsTrackingPage />} />
          <Route path="/features/health-monitoring" element={<HealthMonitoringPage />} />
          <Route path="/features/smart-feeding" element={<SmartFeedingPage />} />
          <Route path="/features/mobile-app" element={<MobileAppPage />} />
          <Route path="/features/vet-approved" element={<VetApprovedPage />} />
          <Route path="/features/smart-alerts" element={<SmartAlertsPage />} />
          <Route path="/features/analytics-dashboard" element={<AnalyticsDashboardPage />} />
          <Route path="/features/temperature-monitoring" element={<TemperatureMonitoringPage />} />
          <Route path="/features/vet-connect" element={<VetConnectPage />} />
          <Route path="/app" element={<AppPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/gps-tracker" element={<ComingSoonPage type="gps" />} />
          <Route path="/smart-bowl" element={<ComingSoonPage type="bowl" />} />
          <Route path="/privacy-policy" element={<LegalPage title="Privacy Policy" type="privacy" />} />
          <Route path="/terms" element={<LegalPage title="Terms & Conditions" type="terms" />} />
          <Route path="/shipping" element={<LegalPage title="Shipping Policy" type="shipping" />} />
          <Route path="/refunds" element={<LegalPage title="Refund Policy" type="refunds" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      {showFooter && (
        <DeferredRender className="deferred-section" minHeight={280} rootMargin="420px 0px">
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </DeferredRender>
      )}
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <ToastProvider>
          <AppShell />
        </ToastProvider>
      </CartProvider>
    </ThemeProvider>
  )
}
