# 09ThemeSwitcher

A React mini project demonstrating Theme Switching using React Context API and Tailwind CSS v4.

## Features

* Light/Dark mode toggle
* Global theme management using Context API
* Custom React Hook (`useTheme`)
* Tailwind CSS dark mode integration
* Modern Tailwind v4 setup
* Responsive UI card component

## Tech Stack

* React.js
* Vite
* Tailwind CSS v4
* Context API

## Project Structure

```bash id="jlwm5a"
09ThemeSwitcher/
│
├── public/
├── src/
│   ├── components/
│   │   ├── Card.jsx
│   │   └── ThemeBtn.jsx
│   │
│   ├── Contexts/
│   │   └── theme.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
```

## Learning Concepts

* createContext()
* useContext()
* Custom Hooks
* Theme Switching
* Global State Management
* Tailwind Dark Mode
* Controlled Toggle Switch

## Tailwind v4 Dark Mode Setup

```css id="jlwm8c"
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));
```

## Setup Instructions

Install dependencies:

```bash id="jlwm2v"
npm install
```

Run development server:

```bash id="jlwm0r"
npm run dev
```

## Future Improvements

* Store theme in localStorage
* Add smooth theme transitions
* System theme detection
* Multiple theme support

## Author

Saksham Lodha
