import { type Todo as TodoType, type ListOfTodos, type TodoId } from '../types'; // Importa los tipos relacionados con las tareas del archivo types.
import { Todo } from './Todo'; // Importa el componente Todo desde el archivo Todo.tsx.

// Declara la interfaz Props que define la estructura de las propiedades esperadas por el componente.
interface Props {
    todos: ListOfTodos; // Lista de tareas.
    // Función que se ejecutará al cambiar el estado de completado de una tarea.
    onToggleCompleteTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void;
    // Función que se ejecutará al eliminar una tarea.
    onRemoveTodo: ({ id }: TodoId) => void;
}

// Declara el componente Todos como una función de componente de React que recibe las propiedades definidas en la interfaz Props.
export const Todos: React.FC<Props> = ({ todos, onToggleCompleteTodo, onRemoveTodo }) => {
    return (
        // Renderiza una lista no ordenada con la clase 'todo-list'.
        <ul className='todo-list'>
            {/* Mapea sobre cada tarea en la lista de tareas y renderiza un elemento de lista (li) para cada una. */}
            {todos.map(todo => (
                <li
                    key={todo.id} // Utiliza el id de la tarea como clave única.
                    className={`${todo.completed ? 'completed' : ''}`}> {/* Aplica la clase 'completed' si la tarea está completada. */}
                    {/* Renderiza el componente Todo para mostrar la tarea. */}
                    <Todo
                        key={todo.id} // Utiliza el id de la tarea como clave única para el componente Todo.
                        id={todo.id} // Propiedad que indica el id de la tarea.
                        title={todo.title} // Propiedad que indica el título de la tarea.
                        completed={todo.completed} // Propiedad que indica si la tarea está completada.
                        onToggleCompleteTodo={onToggleCompleteTodo} // Función para cambiar el estado de completado de la tarea.
                        onRemoveTodo={onRemoveTodo} // Función para eliminar la tarea.
                    />
                </li>
            ))}
        </ul>
    );
};
