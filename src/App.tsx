import { useState } from "react"
import { Todos } from "./components/Todos"
import { type TodoId, type Todo as TodoType } from "./types"


const mockTodos = [
  {
    id: 1,
    title: 'Aprender React con Typescript',
    completed: false
  },
  {
    id: 2,
    title: 'Terminar este proyecto',
    completed: false
  },
  {
    id: 3,
    title: 'Seguir haciendo ejercicios en Typescript',
    completed: false
  }
]



function App() {

  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = ({ id }: TodoId): void => {
    const newtTodos = todos.filter(todo => todo.id !== id)
    setTodos(newtTodos)
  }

  const handleComplete = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })

    setTodos(newTodos)
  }


  return (
    <div className="todoapp">
      <Todos
        onToggleCompleteTodo={handleComplete}
        onRemoveTodo={handleRemove}
        todos={todos} />
    </div>

  )
}

export default App
