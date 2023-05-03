import { useEffect, useReducer } from "react";
import { Actions, todoReducer } from "../08-useReducer/todoReducer";

const initialState: {id: number, description: string, done: boolean}[] = []

const init = () => {
    return JSON.parse(localStorage.getItem('todos')!) || []
}

export const useTodo = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    const handleNewTodo = (description: string) => {
        dispatch({type: Actions.ADD, payload: {
            id: new Date().getTime(),
            description: description,
            done: false
        }})
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])
    

    const handleDeleteTodo = (id: number) => {
        dispatch({type: Actions.REMOVE, payload: {id}});
    }

    const handleToggleTodo = (id: number) => {
        dispatch({type: Actions.TOGGLE, payload: {id}});
    }

    const todosCount = (): number => {
        return todos.filter((todo: any) => todo.done === true).length 
    }

    const pendingTodosCount = (): number => {
        return todos.filter((todo: any) => todo.done === false).length 
    }

  return {
        todos, 
        todosCount: todosCount(),
        pendingTodosCount: pendingTodosCount(), 
        handleNewTodo, 
        handleDeleteTodo, 
        handleToggleTodo 
    };
}
