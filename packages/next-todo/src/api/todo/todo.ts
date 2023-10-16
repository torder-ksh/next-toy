import { Todo, TodoFilter } from "@/interface/todo/todo";

export const getTodoList = async (params?: TodoFilter): Promise<Todo[]> => {
  const res = await fetch(
    `http://localhost:3065/todos?content=${params?.content || ""}`,
    {
      method: "GET",
    }
  );
  const result = await res.json();
  return result;
};

export const createTodo = async ({ content }: { content: string }) => {
  const res = await fetch("http://localhost:3065/todo", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      content,
    }),
  });
  const result = await res.json();
  return result;
};

export const deleteTodo = async ({ id }: { id: string }) => {
  const res = await fetch("http://localhost:3065/todo", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id,
    }),
  });
  const result = await res.json();
  return result;
};
