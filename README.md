# Pawnavz Technology — React App

India's first pet technology startup. Built with Vite + React + React Router.

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Install & Run

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
pawnavz-react/
├── index.html                    # Vite entry HTML
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx                  # App bootstrap + BrowserRouter
    ├── App.jsx                   # Routes + Providers shell
    ├── context/
    │   ├── CartContext.jsx       # Cart state (add/remove/qty/wishlist)
    │   ├── ToastContext.jsx      # Toast notifications
    │   └── ThemeContext.jsx      # Dark/light theme
    ├── components/
    │   ├── Navbar.jsx            # Sticky nav + mobile menu
    │   ├── Footer.jsx            # Site footer
    │   ├── CartSidebar.jsx       # Slide-out cart drawer
    │   ├── ProductCard.jsx       # Reusable product card
    │   ├── Toast.jsx             # Toast notification UI
    │   ├── CtaBlock.jsx          # Email signup CTA widget
    │   └── ApplyModal.jsx        # Job application modal
    ├── pages/
    │   ├── HomePage.jsx          # / — Hero, products, blog, CTA
    │   ├── ShopPage.jsx          # /shop — Product grid + filters
    │   ├── ProductPage.jsx       # /product/:id — Detail + tabs
    │   ├── CartPage.jsx          # /cart — Cart summary + coupon
    │   ├── CheckoutPage.jsx      # /checkout — Address + payment
    │   ├── OrderSuccessPage.jsx  # /order-success
    │   ├── FeaturesPage.jsx      # /features
    │   ├── AppPage.jsx           # /app — Mobile app showcase
    │   ├── PricingPage.jsx       # /pricing — Plans + FAQ
    │   ├── BlogPage.jsx          # /blog — Blog listing
    │   ├── BlogPostPage.jsx      # /blog/:id — Blog detail
    │   ├── AboutPage.jsx         # /about — Story + team
    │   ├── CareersPage.jsx       # /careers — Jobs + apply modal
    │   ├── ContactPage.jsx       # /contact
    │   ├── AuthPage.jsx          # /auth — Sign in + register
    │   ├── ComingSoonPage.jsx    # /gps-tracker + /smart-bowl
    │   ├── LegalPage.jsx         # Privacy, Terms, Shipping, Refunds
    │   └── NotFoundPage.jsx      # 404
    ├── data/
    │   ├── products.js           # 12 products with specs
    │   └── blogs.js              # 6 blog posts
    └── styles/
        └── global.css            # All CSS (design tokens, components)
```

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/shop` | Shop |
| `/product/:id` | Product Detail |
| `/cart` | Cart |
| `/checkout` | Checkout |
| `/order-success` | Order Confirmation |
| `/features` | Features |
| `/app` | Mobile App |
| `/pricing` | Pricing |
| `/blog` | Blog |
| `/blog/:id` | Blog Post |
| `/about` | About |
| `/careers` | Careers |
| `/contact` | Contact |
| `/auth` | Sign In / Register |
| `/gps-tracker` | GPS Tracker Coming Soon |
| `/smart-bowl` | Smart Bowl Coming Soon |
| `/privacy-policy` | Legal |
| `/terms` | Legal |
| `/shipping` | Legal |
| `/refunds` | Legal |

## Tech Stack

- **Vite 5** — Fast build tool
- **React 18** — UI library  
- **React Router 6** — Client-side routing
- **CSS Variables** — Design tokens for dark/light theming
- **Context API** — Cart, Toast, Theme global state

## Features

- 🛒 Full e-commerce: cart, wishlist, checkout, order success
- 🌙 Dark / Light mode with localStorage persistence
- 📱 Mobile responsive with hamburger menu
- 🔍 Product search + sort on shop page
- 🎯 Careers page with Apply Now modal (full job application form)
- 📧 Email waitlist CTAs on coming soon pages
- 🔐 Auth page with separate Sign In and Create Account flows
- ✅ Coupon code system (try PAWNAVZ20)
