import { createContext, useContext } from "react";

/*
|--------------------------------------------------------------------------
| TodoContext
|--------------------------------------------------------------------------
| Global storage for all todo related data
|
| Stores:
| - todos
| - addTodo()
| - updatedTodo()
| - deletedTodo()
| - completedTodo()
|
*/

export const TodoContext = createContext({

    todos: [
        {
            id: 1,
            todo: "Todo Message",
            completed: false,
        }
    ],

    addTodo: (todo) => {},

    updatedTodo: (id, todo) => {},

    deletedTodo: (id) => {},

    completedTodo: (id) => {},
})



/*
|--------------------------------------------------------------------------
| useTodo()
|--------------------------------------------------------------------------
| Custom hook for easy context access
|
| Instead of:
| useContext(TodoContext)
|
| We use:
| useTodo()
|
*/

export default function useTodo() {
    return useContext(TodoContext)
}


/*
|--------------------------------------------------------------------------
| Provider Export
|--------------------------------------------------------------------------
*/

export const TodoContextProvider = TodoContext.Provider