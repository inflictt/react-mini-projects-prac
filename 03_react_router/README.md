# React Router Learning Project 🚀

A modern **React + Vite + React Router DOM** learning project built using **industry-standard routing architecture**.

This project demonstrates:

* Nested routing with `createBrowserRouter`
* Shared layouts using `Outlet`
* Dynamic routes with `useParams`
* Navigation with `NavLink`
* API fetching with `useEffect`
* GitHub profile integration
* Reusable Header / Footer components

---

## 📂 Project Structure

```bash
src/
├── components/
│   ├── Header/
│   └── Footer/
│
├── layouts/
│   └── RootLayout.jsx
│
├── router/
│   └── router.jsx
│
├── Pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Github.jsx
│   └── User.jsx
│
├── main.jsx
└── index.css
```

---

## ✨ Features

### ✅ Modern Routing

Uses React Router v6+ modern APIs:

* `createBrowserRouter`
* `RouterProvider`
* `Outlet`
* `NavLink`

### ✅ Dynamic Routes

Supports dynamic user routing:

```bash
/user/:userid
```

Example:

```bash
/user/1
```

This route extracts params using:

```jsx
const { userid } = useParams();
```

---

## 🌐 Pages Included

* **Home Page** → landing UI
* **About Page** → project/company intro
* **Contact Page** → contact section
* **GitHub Page** → live GitHub API integration
* **User Page** → dynamic route params demo

---

## 🔥 GitHub API Integration

This project fetches live GitHub profile data:

```jsx
fetch("https://api.github.com/users/inflictt")
```

Shows:

* Followers
* Following
* Profile data

---

## 🎨 Styling

Styled using **Tailwind CSS**.

Includes:

* Sticky navbar
* Active route highlighting
* Responsive layout
* CTA buttons
* Clean landing page UI

---

## 🛠️ Tech Stack

* React
* Vite
* React Router DOM
* Tailwind CSS
* GitHub REST API

---

## ▶️ Run Locally

```bash
npm install
npm run dev
```

Open:

```bash
http://localhost:5173
```

---

## 📚 Learning Outcomes

This project helped practice:

* Routing architecture
* Layout patterns
* Dynamic URL params
* API data fetching
* State management with `useState`
* Effects with `useEffect`
* Scalable folder structure

---

## 👨‍💻 Author

Built by **Saksham Lodha** as part of React Router learning and mini-project practice.

---

## ⭐ Future Improvements

* Protected routes
* Authentication flow
* Route loaders
* Lazy loading
* Dashboard nested routes
* Error boundaries

---

If you found this project helpful, ⭐ the repo and keep building 🚀
