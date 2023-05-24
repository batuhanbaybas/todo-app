import TodoList from "@/components/todo-list";
import { todo } from "@/context/feature/todo-slice";
import Head from "next/head";
import React from "react";
import { useSelector } from "react-redux";

const Todo = () => {
  const todos = useSelector(todo);
  return (
    <>
      <Head>
        <title>{pageHeader.Todo.title}</title>
        <meta name="description" content={pageHeader.Todo.description} />
      </Head>
      <TodoList status={"Todo"} items={todos} />
    </>
  );
};

export default Todo;
