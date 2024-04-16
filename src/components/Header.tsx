import { type TodoTitle } from "../types";
import { CreateTodo } from "./CreateTodo";

interface Props {
    onAddTodo: ({title}: TodoTitle) => void
}

export const Header: React.FC = ({ onAddTodo }) => {
    <header className="header">
        <h1>TODO
            <img
                style={{ width: '60px', height: 'auto' }}
                src="/assets/img/logoTS.png" />
        </h1>
        <CreateTodo saveTodo={onAddTodo} />
    </header>
}