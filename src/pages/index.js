import Head from "next/head";
import { Inter } from "next/font/google";
import Todos from "@/components/todos";
import { useSelector } from "react-redux";
import { todo } from "@/context/feature/todo-slice";
import { pageHeader } from "@/helpers/page-headers";

export default function Home() {
  const todos = useSelector(todo);
  return (
    <>
      <Head>
        <title>{pageHeader.Todo.title}</title>
        <meta name="description" content={pageHeader.Todo.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Todos items={todos} status={"Todo"} />
      </main>
    </>
  );
}
