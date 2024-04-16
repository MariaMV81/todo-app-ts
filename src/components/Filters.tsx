import { FILTERS_BUTTONS, type TODO_FILTERS } from "../consts"
import { type FilterValue } from "../types"


interface Props {
    onFilterChange: (filter: FilterValue) => void
    filterSelected: FilterValue
}

export const Filters: React.FC<Props> = ({ onFilterChange, filterSelected }) => {
    const handleClick = (filter: FilterValue) => {
        onFilterChange(filter);
    };

    return (
        <ul className="filters">
            {Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
                const isSelected = key === filterSelected;
                const className = isSelected ? 'selected' : '';

                return (
                    <li key={key}>
                        <a
                            href={href}
                            onClick={() => handleClick(key)}
                            className={className}>
                            {literal}
                        </a>
                    </li>
                );
            })}
            <li>
                <a
                    className={`${filterSelected === 'all' ? 'selected' : ''}`}
                    onClick={() => onFilterChange('all')}>
                    Todas
                </a>
            </li>
            <li>
                <a
                    className={`${filterSelected === 'active' ? 'selected' : ''}`}
                    onClick={() => onFilterChange('active')}>
                    Activas
                </a>
            </li>
            <li>
                <a
                    className={`${filterSelected === 'completed' ? 'selected' : ''}`}
                    onClick={() => onFilterChange('completed')}>
                    Completadas
                </a>
            </li>
        </ul>
    );
};



