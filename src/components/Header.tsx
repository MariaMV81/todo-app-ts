import { type TodoTitle } from "../types";
import { CreateTodo } from "./CreateTodo";
import logo from "../assets/img/logoTS.png"

interface Props {
    onAddTodo: ({title}: TodoTitle) => void
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
    return(
        <header className="header">
        <h1>TODO
            <img
                style={{ width: '60px', height: 'auto' }}
                src={logo}
                />
        </h1>
        <CreateTodo saveTodo={onAddTodo} />
    </header>
    )
    
};