import { useContext, useState } from "react";
import useTodo from "../contexts/TodoContext";

export default function TodoForm() {

    // Stores current input field value
    const [todo, setTodos] = useState("")

    // Access addTodo function from Context API
    const { addTodo } = useTodo()


    /*
    |--------------------------------------------------------------------------
    | ADD FUNCTION
    |--------------------------------------------------------------------------
    | 1. Prevents page reload
    | 2. Checks empty input
    | 3. Adds new todo
    | 4. Clears input field
    |
    */

    const add = (e) => {

        e.preventDefault()

        if (!todo) return

        addTodo({
            todo,
            completed: false
        })

        setTodos("")
    }

    return (

        <form onSubmit={add} className="flex">

            <input

                // Controlled input value
                value={todo}

                // Updates state while typing
                onChange={(e) => {
                    setTodos(e.target.value)
                }}

                type="text"

                placeholder="Write Todo..."

                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />

            <button
                type="submit"

                className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
            >
                Add
            </button>

        </form>
    );
}