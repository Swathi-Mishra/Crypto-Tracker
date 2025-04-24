# 📊 Real-Time Crypto Price Tracker

A responsive web app built with **React + Redux Toolkit** that fetches and displays real-time cryptocurrency prices. Optimized for performance, UI/UX, and state management.

---

## 🚀 Features

- Real-time crypto price updates
- Search, filter, and sort options
- Clean, modern UI with dark/light theme
- Responsive for all devices
- Built using Redux Toolkit & CoinGecko API

---

## 🧱 Tech Stack & Architecture

- **Frontend**: React.js, Redux Toolkit, TailwindCSS
- **State Management**: Redux Toolkit Slices, Middleware
- **API Source**: [CoinGecko Public API](https://www.coingecko.com/en/api)
- **Routing**: React Router
- **Styling**: TailwindCSS
- **Deployment**: GitHub Pages / Vercel / Netlify

### 📊 Architecture Overview
App.js ├── <Header /> ├── <CryptoList /> │ └── Fetches + maps API response ├── <CryptoDetails /> └── Redux store setup (slices: cryptoSlice, uiSlice)


---

## 🛠️ Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/Swathi-Mishra/Crypto-Tracker.git
cd Crypto-Tracker
```

### 2. Install dependencies
```bash
Copy
Edit
npm install
```

### 3. Run the app locally
```bash
Copy
Edit
npm start
```
The app runs on http://localhost:3000.

### 💡 Thought Process
Chose Redux Toolkit for clean and scalable state management.

Utilized CoinGecko for stable and accurate market data.

Focused on component modularity and UI responsiveness.

Structured state updates to ensure minimal re-renders.
