//los tipos lo puedes exportar como modulos, para que sena reutilizables

export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

export type TodoId = Omit<Todo, 'completed' | 'title'>;
export type TodoTitle = Pick<Todo, 'title'>;
export type TodoCompleted = Pick<Todo, 'completed'>;

export type ListOfTodos = Todo[]; //interface Todo en un array
