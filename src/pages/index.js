import Head from "next/head";
import Todos from "@/components/todo-list";
import { useSelector } from "react-redux";
import { allTodos, todo } from "@/context/feature/todo-slice";
import { pageHeader } from "@/helpers/page-headers";

export default function Home() {
  const allTodo = useSelector(allTodos);
  return (
    <>
      <Head>
        <title>{pageHeader.All.title}</title>
        <meta name="description" content={pageHeader.All.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Todos status={"All"} items={allTodo} />
      </main>
    </>
  );
}
