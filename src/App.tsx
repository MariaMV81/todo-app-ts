import { useState } from "react"
import { Todos } from "./components/Todos"
import { TodoTitle, type TodoId, type Todo as TodoType } from "./types"
import { Footer } from "./components/Footer"
import { TODO_FILTERS } from "./consts"
import { Header } from "./components/Header"
import { FilterValue } from "./types"


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


const App = (): JSX.Element => {

  const [todos, setTodos] = useState(mockTodos)

  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleRemove = ({ id }: { id: number }): void => {
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

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const handleRemoveAllCompleted = (): void => {

    const newTodos = todos.filter(todo => !todo.completed)

    console.log("handleRemoveAllCompleted fue llamada");
    setTodos(newTodos)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.filter(todo => todo.completed).length;

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  const handleAddTodo = ({ title }: TodoTitle): void => {
    const newTodo = {
      title,
      id: crypto.randomUUID(),
      completed: false
    }

    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }
  return (
    <div className="todoapp">
      <Header onAddTodo={handleAddTodo} />
      <Todos
        onToggleCompleteTodo={handleComplete}
        onRemoveTodo={handleRemove}
        todos={filteredTodos}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        onClearCompleted={handleRemoveAllCompleted}
        handleFilterChange={handleFilterChange}
      />
    </div>

  );
};


export default App;