import { useState } from "react";

import useTodo from "../contexts/TodoContext";



export default function TodoItem({ todo }) {


    /*
    |--------------------------------------------------------------------------
    | EDIT MODE STATE
    |--------------------------------------------------------------------------
    | Controls editable mode
    |
    */

    const [isTodoEditable, setIsTodoEditable] = useState(false)



    /*
    |--------------------------------------------------------------------------
    | TODO MESSAGE STATE
    |--------------------------------------------------------------------------
    | Stores todo text
    |
    */

    const [todoMsg, setTodoMsg] = useState(todo.todo)



    /*
    |--------------------------------------------------------------------------
    | ACCESS CONTEXT FUNCTIONS
    |--------------------------------------------------------------------------
    */

    const {

        updatedTodo,

        deletedTodo,

        completedTodo

    } = useTodo()



    /*
    |--------------------------------------------------------------------------
    | EDIT TODO
    |--------------------------------------------------------------------------
    | Updates todo text
    |
    */

    const editTodo = () => {

        updatedTodo(

            todo.id,

            {
                ...todo,
                todo: todoMsg
            }
        )

        setIsTodoEditable(false)
    }



    /*
    |--------------------------------------------------------------------------
    | TOGGLE COMPLETED
    |--------------------------------------------------------------------------
    | Marks todo complete/incomplete
    |
    */

    const toggleCompleted = () => {

        completedTodo(todo.id)
    }



    return (

        <div

            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${todo.completed
                ? "bg-[#c6e9a7]"
                : "bg-[#ccbed7]"
                }`}
        >


            {/* Checkbox */}

            <input

                type="checkbox"

                className="cursor-pointer"

                checked={todo.completed}

                onChange={toggleCompleted}
            />



            {/* Todo Text Input */}
            <input

                type="text"

                className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable
                    ? "border-black/10 px-2"
                    : "border-transparent"
                    } ${todo.completed ? "line-through" : ""}`}

                value={todoMsg}

                onChange={(e) =>
                    setTodoMsg(e.target.value)
                }

                // Input editable only in edit mode
                readOnly={!isTodoEditable}
            />
            <p className=" w-full ">
                Task added at : {new Date(todo.id).toLocaleString()}
            </p>


            {/* Edit / Save Button */}

            <button

                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"

                onClick={() => {

                    // Prevent editing completed todo
                    if (todo.completed) return;

                    if (isTodoEditable) {

                        editTodo();

                    } else {

                        setIsTodoEditable((prev) => !prev);
                    }
                }}

                disabled={todo.completed}
            >

                {isTodoEditable ? "📁" : "✏️"}

            </button>



            {/* Delete Button */}

            <button

                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"

                onClick={() =>
                    deletedTodo(todo.id)
                }
            >
                ❌
            </button>

        </div>
    );
}