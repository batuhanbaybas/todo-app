import Todos from "@/components/todos";
import { completedTodo } from "@/context/feature/todo-slice";
import { pageHeader } from "@/helpers/page-headers";
import Head from "next/head";
import React from "react";
import { useSelector } from "react-redux";

const Completed = () => {
  const completed = useSelector(completedTodo);
  return (
    <>
      <Head>
        <title>{pageHeader.Done.title}</title>
        <meta name="description" content={pageHeader.Done.description} />
      </Head>
      <Todos status="Completed" items={completed} />
    </>
  );
};

export default Completed;
