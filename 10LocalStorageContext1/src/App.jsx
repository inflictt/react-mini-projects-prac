import { useEffect, useState } from 'react'

import './App.css'

import { TodoContextProvider } from './contexts/TodoContext'

import TodoForm from './components/Todoform'

import TodoItem from './components/Todoitemui'



export default function App() {


  /*
  |--------------------------------------------------------------------------
  | TODOS STATE
  |--------------------------------------------------------------------------
  | Stores all todos in array
  |
  */

  const [todos, setTodos] = useState([])



  /*
  |--------------------------------------------------------------------------
  | ADD TODO
  |--------------------------------------------------------------------------
  | Adds new todo at beginning
  |
  */

  const addTodo = (todo) => {

    setTodos((prev) => [

      {
        id: Date.now(),
        ...todo
      },

      ...prev
    ])
  }



  /*
  |--------------------------------------------------------------------------
  | UPDATE TODO
  |--------------------------------------------------------------------------
  | Updates existing todo
  |
  */

  const updatedTodo = (id, todo) => {

    setTodos((prev) =>

      prev.map((prevTodo) =>

        (prevTodo.id === id ? todo : prevTodo)
      )
    )
  }



  /*
  |--------------------------------------------------------------------------
  | DELETE TODO
  |--------------------------------------------------------------------------
  | Removes todo permanently
  |
  */

  const deletedTodo = (id) => {

    setTodos((prev) =>

      prev.filter((todo) => todo.id !== id)
    )
  }



  /*
  |--------------------------------------------------------------------------
  | TOGGLE COMPLETED
  |--------------------------------------------------------------------------
  | Changes completed true/false
  |
  */

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



  /*
  |--------------------------------------------------------------------------
  | LOAD TODOS FROM LOCAL STORAGE
  |--------------------------------------------------------------------------
  | Runs once when app loads
  |
  */

  useEffect(() => {

    const todos = JSON.parse(

      localStorage.getItem("todos")
    )

    if (todos && todos.length > 0) {

      setTodos(todos)
    }

  }, [])



  /*
  |--------------------------------------------------------------------------
  | SAVE TODOS TO LOCAL STORAGE
  |--------------------------------------------------------------------------
  | Runs whenever todos change
  |
  */

  useEffect(() => {

    localStorage.setItem(

      "todos",

      JSON.stringify(todos)
    )

  }, [todos])



  return (

    <TodoContextProvider
      value={{

        todos,

        addTodo,

        updatedTodo,

        deletedTodo,

        completedTodo
      }}
    >

      <div className="bg-[#172842] min-h-screen py-8">

        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">

          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>


          {/* Todo Input Form */}

          <div className="mb-4">

            <TodoForm />

          </div>



          {/* Todo List */}

          <div className="flex flex-wrap gap-y-3">

            {
              todos.map((todo) => (

                <div
                  key={todo.id}
                  className='w-full'
                >

                  <TodoItem todo={todo} />

                </div>
              ))
            }

          </div>

        </div>

      </div>

    </TodoContextProvider>
  )
}