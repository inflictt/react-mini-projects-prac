# 10LocalStorageContextTodo

A fully functional Todo Application built using React.js, Context API, Local Storage, and Tailwind CSS.

This project demonstrates global state management using Context API along with persistent storage using browser localStorage.

---

# Features

* Add Todos
* Edit Todos
* Delete Todos
* Mark Todos as Completed
* Persistent Data using localStorage
* Global State Management with Context API
* Fully Responsive UI
* Tailwind CSS Styling

---

# Tech Stack

* React.js
* Vite
* Context API
* Tailwind CSS
* Local Storage

---

# Folder Structure

```bash
10LocalStorageContextTodo/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── TodoForm.jsx
│   │   └── TodoItem.jsx
│   │
│   ├── contexts/
│   │   └── TodoContext.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── App.css
│
├── package.json
├── vite.config.js
└── README.md
```

---

# Concepts Learned

## React Hooks

* useState()
* useEffect()
* useContext()

## Context API

* createContext()
* Provider
* Custom Hooks

## State Management

* Add State
* Update State
* Delete State
* Toggle State

## Local Storage

* localStorage.setItem()
* localStorage.getItem()

## Tailwind CSS

* Responsive UI
* Conditional Styling
* Dynamic Classes

---

# Flow of Application

```text
User Action
    ↓
Context Function Called
    ↓
State Updated
    ↓
Todos Re-render
    ↓
localStorage Updated
```

---

# How Context API Works Here

## Step 1

Context is created:

```js
createContext()
```

---

## Step 2

Provider wraps the application:

```jsx
<TodoContextProvider value={...}>
```

---

## Step 3

Components access global data using:

```js
useTodo()
```

---

# CRUD Operations

## Add Todo

```js
addTodo()
```

Adds new todo at top of list.

---

## Update Todo

```js
updatedTodo()
```

Updates existing todo text.

---

## Delete Todo

```js
deletedTodo()
```

Removes todo permanently.

---

## Complete Todo

```js
completedTodo()
```

Toggles completed status.

---

# Local Storage Logic

## Load Existing Todos

```js
useEffect(() => {
   const todos = JSON.parse(localStorage.getItem("todos"))
}, [])
```

Runs once when app loads.

---

## Save Todos Automatically

```js
useEffect(() => {
   localStorage.setItem("todos", JSON.stringify(todos))
}, [todos])
```

Runs whenever todos change.

---

# Setup Instructions

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

---

# Future Improvements

* Dark Mode
* Due Dates
* Todo Categories
* Drag and Drop
* Search Todos
* Authentication
* Backend Integration

---

# Author

Saksham Lodha
