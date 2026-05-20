# React Todo App — Complete Code Explanation

---

# FILE 1 → App.jsx

```jsx
import { useEffect, useState } from 'react'
import './App.css'

import { TodoContextProvider } from './contexts/TodoContext'

import TodoForm from './components/Todoform'
import TodoItem from './components/Todoitemui'
```

## Imports Explanation

### useState

Used for creating state.

```js
const [todos, setTodos] = useState([])
```

Stores all todos.

---

### useEffect

Used for side effects.

Examples:

* loading localStorage data
* saving data to localStorage

---

### TodoContextProvider

Provider that gives global todo data to all child components.

---

### TodoForm

Component responsible for adding todos.

---

### TodoItem

Component responsible for:

* edit
* delete
* complete toggle

---

## TODOS STATE

```jsx
const [todos, setTodos] = useState([])
```

Stores all todos inside an array.

Example:

```js
[
  {
    id: 1,
    todo: "Learn React",
    completed: false
  }
]
```

---

# ADD TODO LOGIC

```jsx
const addTodo = (todo) => {
  setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
}
```

## Breakdown

### prev

Contains previous todos.

---

### Date.now()

Creates unique ID.

---

### ...todo

Spreads todo object.

Example:

```js
{
  todo: "Study",
  completed: false
}
```

---

### Final Result

```js
{
  id: 123456,
  todo: "Study",
  completed: false
}
```

---

# UPDATE TODO LOGIC

```jsx
const updatedTodo = (id, todo) => {
  setTodos((prev) =>
    prev.map((prevTodo) =>
      (prevTodo.id === id ? todo : prevTodo)
    )
  )
}
```

## map()

Loops through every todo.

---

## Condition

```js
prevTodo.id === id
```

Checks correct todo.

---

## If Match

Replace todo.

---

## Else

Keep old todo.

---

# DELETE TODO LOGIC

```jsx
const deletedTodo = (id) => {
  setTodos((prev) =>
    prev.filter((todo) => todo.id !== id)
  )
}
```

## filter()

Keeps all todos except selected one.

---

# COMPLETE TODO LOGIC

```jsx
const completedTodo = (id) => {
  setTodos((prev) =>
    prev.map((prevTodo) =>
      prevTodo.id === id
        ? {
            ...prevTodo,
            completed: !prevTodo.completed
          }
        : prevTodo
    )
  )
}
```

## !prevTodo.completed

Toggles:

```js
true → false
false → true
```

---

# LOCAL STORAGE LOAD

```jsx
useEffect(() => {
  const todos = JSON.parse(localStorage.getItem("todos"))

  if (todos && todos.length > 0) {
    setTodos(todos)
  }
}, [])
```

## []

Runs only once.

---

## localStorage.getItem()

Gets saved todos.

---

## JSON.parse()

Converts string → array.

---

# LOCAL STORAGE SAVE

```jsx
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos))
}, [todos])
```

## Whenever todos change:

* add
* edit
* delete
* complete

localStorage updates automatically.

---

# PROVIDER LOGIC

```jsx
<TodoContextProvider
  value={{
    todos,
    addTodo,
    updatedTodo,
    deletedTodo,
    completedTodo
  }}
>
```

## Purpose

Makes data globally available.

Any component can access:

```js
useTodo()
```

---

---

# FILE 2 → TodoContext.js

```jsx
import { createContext , useContext } from "react";
```

---

# CREATE CONTEXT

```jsx
export const TodoContext = createContext({})
```

Creates global storage.

---

# DEFAULT VALUES

```jsx
{
  todos: [],
  addTodo: () => {},
}
```

Only placeholders.

Real values come from Provider.

---

# CUSTOM HOOK

```jsx
export default function useTodo (){
    return useContext(TodoContext)
}
```

## Why?

Instead of:

```js
useContext(TodoContext)
```

We simply write:

```js
useTodo()
```

Cleaner and professional.

---

# PROVIDER EXPORT

```jsx
export const TodoContextProvider = TodoContext.Provider
```

Shortcut for:

```jsx
<TodoContext.Provider>
```

---

---

# FILE 3 → TodoForm.jsx

# INPUT STATE

```jsx
const [todo, setTodos] = useState("")
```

Stores input value.

---

# ACCESS CONTEXT

```jsx
const { addTodo } = useTodo()
```

Gets addTodo function.

---

# ADD FUNCTION

```jsx
const add = (e) => {
  e.preventDefault()
```

Prevents page reload.

---

## Empty Check

```jsx
if (!todo) return
```

Prevents empty todo.

---

## Add Todo

```jsx
addTodo({ todo, completed: false })
```

Creates new todo object.

---

## Clear Input

```jsx
setTodos("")
```

Resets field.

---

# CONTROLLED INPUT

```jsx
value={todo}
```

React controls input.

---

```jsx
onChange={(e) => setTodos(e.target.value)}
```

Updates state while typing.

---

---

# FILE 4 → TodoItem.jsx

# EDITABLE STATE

```jsx
const [isTodoEditable, setIsTodoEditable] = useState(false)
```

Controls edit mode.

---

# TODO MESSAGE STATE

```jsx
const [todoMsg, setTodoMsg] = useState(todo.todo)
```

Stores editable todo text.

---

# ACCESS CONTEXT FUNCTIONS

```jsx
const { updatedTodo, deletedTodo, completedTodo } = useTodo()
```

Gets global functions.

---

# EDIT TODO

```jsx
const editTodo = () => {
    updatedTodo(todo.id, { ...todo, todo: todoMsg })
    setIsTodoEditable(false)
}
```

## Logic

### Spread old todo

```js
...todo
```

Keeps:

* id
* completed

---

### Replace todo text

```js
todo: todoMsg
```

Updates message.

---

# TOGGLE COMPLETE

```jsx
completedTodo(todo.id)
```

Changes completed status.

---

# CHECKBOX

```jsx
checked={todo.completed}
```

Checkbox reflects completion state.

---

# READONLY LOGIC

```jsx
readOnly={!isTodoEditable}
```

## Meaning

### false

Editable.

### true

Locked.

---

# EDIT BUTTON LOGIC

```jsx
if (isTodoEditable) {
  editTodo();
}
```

If editing → save changes.

---

```jsx
else setIsTodoEditable((prev) => !prev);
```

Else enable editing.

---

# DELETE BUTTON

```jsx
deletedTodo(todo.id)
```

Removes todo.

---

# COMPLETE APPLICATION FLOW

```text
User Types Todo
       ↓
TodoForm State Updates
       ↓
Add Button Clicked
       ↓
addTodo() Runs
       ↓
Todos State Updates
       ↓
App Re-renders
       ↓
Todos Saved To localStorage
       ↓
TodoItem Displays Todos
```

---

# WHAT YOU LEARNED

* React State
* Context API
* Custom Hooks
* Controlled Inputs
* CRUD Operations
* Local Storage
* React Rendering
* Immutable Updates
* Component Communication
* Global State Management
* Tailwind Styling
