import { getTodoList } from "@/api/todo/todo";
import getQueryClient from "@/app/getQueryClient";
import { queryKey } from "@/queries/todo";
import { Hydrate, dehydrate } from "@tanstack/react-query";
import TodoList from "./components/TodoList";

const HydratedTodo = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: queryKey.todoList({ content: "" }),
    queryFn: () => getTodoList({ content: "" }),
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <TodoList />
    </Hydrate>
  );
};

export default HydratedTodo;
