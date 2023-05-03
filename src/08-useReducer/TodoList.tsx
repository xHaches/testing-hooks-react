import { TodoItem } from "./TodoItem"

export const TodoList = ({todos, onDelete, onToggleTodo}: {todos: {id: number, description: string, done: boolean}[], onDelete: (id: number) => void, onToggleTodo: (id: number) => void}) => {
  return (
    <ul className="list-group">
        {
            todos.map((todo: any) => (
                <TodoItem 
                  onDelete={() => onDelete(todo.id)} 
                  key={todo.id} 
                  todo={todo}
                  onToggleTodo={() => onToggleTodo(todo.id)} 
                />
            ))
        }
    </ul>
  )
}
