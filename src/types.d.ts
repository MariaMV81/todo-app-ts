//los tipos lo puedes exportar como modulos, para que sena reutilizables

export interface Todo {
    id: string;
    title: string;
    completed: boolean;
}

 export type ListOfTodos = Todo[]; //interface Todo en un array
