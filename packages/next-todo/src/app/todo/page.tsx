import { getTodoList } from "@/api/todo/todo.ts";

import TodoList from "./components/TodoList";
import HydratedTodo from "./HydratedData";

const Todo = async () => {
  const todoList = await getTodoList();

  return (
    <div>
      <h1>Todo</h1>
      <HydratedTodo />
    </div>
  );
};

export default Todo;
