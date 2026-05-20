# 10LocalStorageContextTodo

A fully functional Todo Application built using React.js, Context API, Local Storage, and Tailwind CSS.

This project demonstrates global state management using Context API along with persistent browser storage using localStorage.

---

# Features

* Add Todos
* Edit Todos
* Delete Todos
* Mark Todos as Completed
* Task Creation Timestamp
* Persistent Data using localStorage
* Global State Management with Context API
* Responsive UI with Tailwind CSS

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
│   ├── App.css
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
```

---

# Core Concepts Learned

## React Hooks

* useState()
* useEffect()
* useContext()

## Context API

* createContext()
* Provider
* Custom Hooks

## CRUD Operations

* Create Todo
* Read Todo
* Update Todo
* Delete Todo

## Local Storage

* localStorage.setItem()
* localStorage.getItem()

## Tailwind CSS

* Dynamic Styling
* Conditional Classes
* Responsive Layouts

---

# Todo Object Structure

```js
{
  id: Date.now(),
  todo: "Learn React Context API",
  completed: false
}
```

---

# Timestamp Logic

Every todo uses:

```js
id: Date.now()
```

This timestamp is later converted into readable date/time using:

```js
new Date(todo.id).toLocaleString()
```

Example Output:

```text
20/5/2026, 10:45:12 PM
```

---

# Application Flow

```text
User Types Todo
       ↓
TodoForm Updates State
       ↓
Add Button Clicked
       ↓
addTodo() Executes
       ↓
Todos State Updates
       ↓
App Re-renders
       ↓
Todos Saved To localStorage
       ↓
TodoItem Displays Updated Todos
```

---

# Context API Flow

```text
TodoContext Created
        ↓
Provider Wraps App
        ↓
Global Data Shared
        ↓
Components Access Data Using useTodo()
```

---

# Features Breakdown

## Add Todo

Adds newest todo at top using:

```js
setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
```

---

## Edit Todo

Allows inline editing of task text.

---

## Complete Todo

Checkbox toggles completed status:

```js
completed: !prevTodo.completed
```

---

## Delete Todo

Removes selected todo permanently.

---

## Persistent Storage

Todos remain saved even after page refresh.

---

# Setup Instructions

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

---

# Future Improvements

* Dark Mode
* Due Dates
* Todo Priority
* Drag and Drop
* Search Todos
* Authentication
* Backend Database Integration

---

# Author

Saksham Lodha
