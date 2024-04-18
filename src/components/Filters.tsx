import { FILTERS_BUTTONS} from "../consts"
import { type FilterValue } from "../types"


interface Props {
    filterSelected: FilterValue
    onFilterChange: (filter: FilterValue) => void
}

export const Filters: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
    
    return (
        <ul className="filters">
            {/* Mapea sobre cada entrada en el objeto FILTERS_BUTTONS */}
            {Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
                // Determina si el filtro actual es el seleccionado.
                const isSelected = key === filterSelected;
                // Define la clase CSS a aplicar según si el filtro está seleccionado.
                const className = isSelected ? 'selected' : '';

                return (
                    <li key={key}>
                        <a
                            href={href}
                            className={className}
                            onClick={(event) => {
                                event.preventDefault()
                                onFilterChange(key as FilterValue)
                            }}

                        >
                            {literal}  {/* Renderiza el texto del filtro. */}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
};



