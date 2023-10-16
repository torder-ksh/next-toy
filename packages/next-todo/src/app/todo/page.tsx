import { getTodoList } from "@/api/todo/todo.ts";

import TodoList from "./components/TodoList";

const Todo = async () => {
  const todoList = await getTodoList();

  return (
    <div>
      <h1>Todo</h1>
      <TodoList todoList={todoList} />
    </div>
  );
};

export default Todo;
