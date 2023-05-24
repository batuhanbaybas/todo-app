import TodoList from "@/components/todo-list";
import { todoOnProgress } from "@/context/feature/todo-slice";
import { pageHeader } from "@/helpers/page-headers";
import Head from "next/head";
import React from "react";
import { useSelector } from "react-redux";

const OnProgress = () => {
  const onProgress = useSelector(todoOnProgress);
  return (
    <>
      <Head>
        <title>
          {pageHeader.OnProgress.title}-{pageHeader.OnProgress.description}
        </title>
        <meta name="description" content={pageHeader.OnProgress.description} />
      </Head>
      <TodoList status="On Progress" items={onProgress} />;
    </>
  );
};

export default OnProgress;
