import { ListOfTodos, TodoId } from '../types';
import { Todo } from './Todo';

//Habría que tiparlo de cierta forma en la funcion, y como es muy dificil de tipar estas props,
//lo que vamos a hacer es utilizar el React.FC (functional component) para tiparlas. Y esas props
//se las pasamos a la funccion con <Props> en la funcion, es una forma de pasarle parámetros a los tipos
//Y a la vez estas props pueden tomar cualquier forma, puede ser que le pasemos un todo o cualquier cosa, 
//por lo tanto lo que hacemos es indicarle la forma que tiene nuestra props. 
interface Props {
    todos: ListOfTodos
    onRemoveTodo: (id: TodoId ) => void
}



export const Todos: React.FC<Props> = ({ todos, onRemoveTodo }) => {
    return (
        <ul className='todo-list'>
            {todos.map(todo => (
                <li
                    key={todo.id}
                    className={`${todo.completed ? 'completed' : ''}`}>
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                        onRemoveTodo={onRemoveTodo}
                    />
                </li>
            ))}
        </ul>
    );
}