
export const TodoItem = ({todo, onDelete, onToggleTodo}: {todo: {id: number, description: string, done: boolean}, onDelete: (id: number) => void, onToggleTodo: (id: number) => void}) => {
  return (
        <li key={todo.id} className="list-group-item d-flex justify-content-between">
            <span 
                className={
                    `align-self-center ${(todo.done) ? 'text-decoration-line-through' : ''}`
                }
                aria-label="span"
                onClick={() => onToggleTodo(todo.id)}
            >{todo.description}</span>
            <button className="btn btn-danger" onClick={() => onDelete(todo.id)}>
                Borrar
            </button>
        </li>
    )
}
