"use client";

import Button from "@/app/common/Button";
import InputBox from "@/app/common/InputBox";
import { Todo, TodoFilter } from "@/interface/todo/todo";
import {
  useTodoCreateMutation,
  useTodoDeleteMutation,
  useTodoListQuery,
} from "@/queries/todo";
import { useState } from "react";

interface Props {
  todoList: Todo[];
}

const TodoList = ({ todoList }: Props) => {
  const [input, setInput] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [filters, setFilters] = useState<TodoFilter>({ content: "" });

  const { mutate: createMutate } = useTodoCreateMutation();
  const { mutate: deleteMutate } = useTodoDeleteMutation();
  const { data, isStale, refetch } = useTodoListQuery({
    initialData: todoList,
    filters,
  });

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onChangeSearchKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const onClickSearch = () => {
    setFilters({ content: searchKeyword });
    setSearchKeyword("");
    // refetch();
  };

  const onClickAdd = () => {
    createMutate(input);
  };

  const onClickDelete = (id: string) => () => {
    deleteMutate(id);
  };

  return (
    <div className="flex flex-col">
      {!isStale ? "fresh" : "stale"}
      <div className="flex gap-2">
        <InputBox value={input} onChange={onChangeInput} />
        <Button onClick={onClickAdd}>추가</Button>
      </div>
      <div className="flex gap-2">
        {filters.content}
        <InputBox value={searchKeyword} onChange={onChangeSearchKeyword} />
        <Button theme={"black"} onClick={onClickSearch}>
          검색
        </Button>
      </div>
      <ul className="flex flex-col gap-3">
        {data.map(({ content, _id }) => {
          return (
            <li key={_id} className="flex justify-between items-center">
              <div>{content}</div>
              <Button theme={"black"} onClick={onClickDelete(_id)}>
                삭제
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
