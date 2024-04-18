import { type FilterValue } from '../types';
import { Filters } from './Filters';

interface Props {
    activeCount: number;
    completedCount: number;
    filterSelected: FilterValue;
    handleFilterChange?: (filter: FilterValue) => void | null;
    onClearCompleted: () => void;
}

export const Footer: React.FC<Props> = ({
    activeCount = 0,
    completedCount = 0,
    filterSelected,
    handleFilterChange,
    onClearCompleted
}) => {
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{activeCount}</strong> Tareas pendientes
            </span>

            {completedCount > 0 && (
                <button
                    className="clear-completed"
                    onClick={onClearCompleted}
                    >
                    Borrar completadas
                </button>
            )}

            <Filters
                filterSelected={filterSelected}
                onFilterChange={handleFilterChange}
            />
        </footer>
    )
}