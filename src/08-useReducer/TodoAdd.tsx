import { ChangeEvent, FormEvent, useState } from "react"

export const TodoAdd = ({handleNewTodo}: {handleNewTodo: (value: string) => void}) => {

    const [value, setValue] = useState('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleNewTodo(value);
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="¿Qué hay que hacer?"
                className="form-control"
                onChange={handleChange}
            />
            <button 
                type="submit"
                className="btn btn-outline-primary mt-1"
            >Agregar</button>
        </form>
    )
}
