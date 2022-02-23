import create from "zustand";
import { v4 as uuid } from "uuid";

interface ITodo {
  id: string;
  val: string;
  done: boolean;
}

interface ITodoState {
  todos: ITodo[];

  getTodosInit: any;
  addTodo(val: string): any;
  deleteTodos(ids: string[]): any;
  updateStatus(id: string, to: boolean): any;
}

const useTodo = create<ITodoState>((set, get) => ({
  todos: [],

  updateStatus: (id, to) => {
    const tmpTodos = [...get().todos];
    const find = tmpTodos.find((i) => i.id === id);
    const index = tmpTodos.indexOf(find);
    if (tmpTodos[index]) tmpTodos[index].done = to;

    localStorage.setItem("todos", JSON.stringify(tmpTodos));

    set(() => ({ todos: tmpTodos }));
  },

  getTodosInit: () => {
    const getTodos = localStorage.getItem("todos");

    if (getTodos) {
      const todos = JSON.parse(getTodos);

      set(() => ({ todos }));
    }
  },

  addTodo: (val) => {
    const tmpTodos = [...get().todos];

    const id = uuid();

    tmpTodos.push({ id, val, done: false });

    localStorage.setItem("todos", JSON.stringify([...tmpTodos]));

    set(() => ({ todos: tmpTodos }));
  },

  deleteTodos: (ids) => {
    const todos = [...get().todos];

    const newTodos: any = [];

    for (let todo of todos) {
      const find = ids.find((i) => i === todo.id);

      if (!find) newTodos.push(todo);
    }

    localStorage.setItem("todos", JSON.stringify(newTodos));

    set(() => ({ todos: newTodos }));
  },
}));

export default useTodo;
