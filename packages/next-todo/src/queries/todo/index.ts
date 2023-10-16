import { createTodo, deleteTodo, getTodoList } from "@/api/todo/todo";
import { Todo, TodoFilter } from "@/interface/todo/todo";
import {
  DefinedUseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

export const queryKey = {
  base: ["todo"] as const,
  todoList: (filter: TodoFilter) => [...queryKey.base, "list", filter] as const,
  detailTodo: (todoId: string) => [...queryKey.base, "detail", todoId] as const,
};

export const useTodoListQuery = ({
  initialData,
  filters = { content: "" },
}: {
  initialData?: any;
  filters?: TodoFilter;
}): DefinedUseQueryResult<Todo[]> => {
  console.log("123123", filters, queryKey.todoList(filters));
  return useQuery({
    queryKey: queryKey.todoList(filters),
    queryFn: () => getTodoList(filters),
    initialData: initialData,
  });
};

export const useTodoCreateMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (content: string) => createTodo({ content }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKey.base,
      });
    },
  });
};

export const useTodoDeleteMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteTodo({ id }),
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey.base);
    },
  });
};
