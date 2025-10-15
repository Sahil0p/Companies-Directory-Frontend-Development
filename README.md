# 🚀 Companies Directory

![React](https://img.shields.io/badge/React-18.0-blue?logo=react)
![Material UI](https://img.shields.io/badge/Material--UI-v6-007FFF?logo=mui)
![License](https://img.shields.io/badge/License-MIT-green)
![Status](https://img.shields.io/badge/Build-Passing-success)

## 🌟 Overview
Welcome to **Companies Directory** — a modern React application to browse, filter, and sort companies seamlessly with **infinite scrolling**.
Built with **Material UI** for a sleek, responsive UI and **React Context API** for clean state management.

---

## 🛠️ Features
🔍  Dynamic Filtering — by name, industry, location, and employee count range  
↕️  Infinite Scrolling — load more companies as you scroll, no pagination clicks  
↔️  Sorting — by company name (A–Z, Z–A) or employee count (asc/desc)  
🗂️  Responsive Grid Layout — 4 equal cards per row with consistent sizing  
🖼️  Details Modal — view full company info on card click  
🌓  Dark Mode — toggle between light/dark themes  
🏷️  Static Data — loads from local JSON for simplicity and performance  
⚙️  Clean Architecture — separate Context, custom hooks, and modular components  

---

## 📂 Project Structure
```text
src/
├── api/
│   └── companyService.js        # Data fetching from static JSON
├── assets/                      # Images, icons, assets
├── components/
│   ├── AppBar.jsx               # Header + theme toggle
│   ├── CompanyCard.jsx          # Company display card
│   ├── CompanyFilters.jsx       # Filters and sort inputs with dropdowns
│   ├── CompanyModal.jsx         # Modal with company details
│   ├── LoadingSkeleton.jsx      # Loading placeholders
│   └── PaginationControls.jsx   # Classic pagination UI (optional)
├── context/
│   └── CompanyContext.js        # State and logic management via React Context
├── hooks/
│   └── useCompanies.js          # Custom hook for consuming company context
├── pages/
│   └── HomePage.jsx             # Layout, infinite scroll, and integration assembly
├── public/
│   └── companies.json           # Static JSON with all company data
├── theme.js                     # MUI theme config for light/dark mode
├── App.jsx                      # Root React component
└── index.js                     # Entry point
