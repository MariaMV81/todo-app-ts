import { useState } from "react"
import { Todos } from "./components/Todos"

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
  return (
    <div className="todoapp">
       <Todos todos={todos} />
    </div>
  
  )
}

export default App
