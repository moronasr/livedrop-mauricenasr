# Week 4 – Storefront v1

**Author:** Maurice Nasr  
**Course:** Eurisko Academy – Backend & AI Systems Design  
**Date:** October 12, 2025  

---

## 🛍️ Overview
This project implements the Storefront v1 app using Vite + React + TypeScript with TailwindCSS.  
It’s structured according to the Week 4 assignment requirements and includes the main pages of an e-commerce flow.

---

## ⚙️ Tech Stack
- Vite — Frontend build tool  
- React (TypeScript) — Component framework  
- TailwindCSS — Styling utility framework  
- Zustand — Lightweight global state for cart  
- React Router DOM — Client-side routing  

---

## 🧭 App Structure
apps/storefront/
 ├── public/
 │   ├── logo.svg
 │   ├── mock-catalog.json      # 20+ products
 │
 ├── src/
 │   ├── lib/router.tsx         # Routing setup
 │   ├── features/cart/         # Zustand store
 │   ├── pages/
 │   │   ├── AppLayout.tsx
 │   │   ├── CatalogPage.tsx
 │   │   ├── ProductPage.tsx
 │   │   ├── CartPage.tsx
 │   │   ├── CheckoutPage.tsx
 │   │   └── OrderStatusPage.tsx
 │   └── index.css              # Tailwind imports
 │
 ├── tailwind.config.js
 ├── postcss.config.js
 └── vite.config.ts

---

## 🚀 Features Implemented
- Catalog page listing 20+ mock products  
- Product details page with “Add to Cart”  
- Cart with total calculation and clear option  
- Checkout & Order status stubs  
- TailwindCSS setup with responsive layout  
- Fully functional routing between all views  

---

## 🧩 Run Locally
From repo root:
cd apps/storefront
npm install
npm run dev

Then open http://localhost:5173

---

## ✅ Submission
Branch: week4-storefront  
Repo: https://github.com/moronasr/livedrop-mauricenasr/tree/week4-storefront
