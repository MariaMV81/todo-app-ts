import React from 'react';
import { type TodoId, type Todo as TodoType } from '../types';

interface Props extends TodoType {
    onToggleCompleteTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void;
    onRemoveTodo: ({ id }: TodoId) => void
}


export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggleCompleteTodo }) => {
    const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) : void => {
        onToggleCompleteTodo ({id, completed: event.target.checked})
        
    }
    return (
        <div className="view">
            <input
                title="Checkbox for todo item"
                className="toggle"
                type="checkbox"
                checked={completed}
                onChange={handleChangeCheckbox}
            />
            <label>{title}</label>
            {/* Renderiza un botón para eliminar la tarea. */}
            <button
                className="destroy"
                type="button"
                onClick={() => {
                    // Llama a la función onRemoveTodo pasando el id de la tarea.
                    onRemoveTodo ({id})
                 }}
            />
            
        </div>
    )
}