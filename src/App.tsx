import { useState } from "react"
import { Todos } from "./components/Todos"
import { TodoTitle } from "./types"

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

  const handleRemove = ({id}: TodoId): void => {
    const newtTodos = todos.filter(todo => todo.id !== id)
    setTodos(newtTodos)
  }


  return (
    <div className="todoapp">
      <Todos
        onRemoveTodo={handleRemove}
        todos={todos} />
    </div>

  )
}

export default App
