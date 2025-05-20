import {createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id:1,
            todo:"Todo 1",
            completed: false,
        },

    ],
    addTodo: () => {},
    deleteTodo: () => {},
    updateTodo: () => {},
    toogleComplete: () => {},
});


export const useTodo=()=>{
    return useContext(TodoContext);
}

export const TodoProvider=TodoContext.Provider;