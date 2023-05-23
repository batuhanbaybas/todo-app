import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Button } from "antd";
import TodoActionModal from "@/components/modals/todo-action-modal";
import { useState } from "react";
import Todos from "@/components/todos";
import { useSelector } from "react-redux";
import { todo } from "@/context/feature/todo-slice";
import { pageHeader } from "@/helpers/page-headers";

const inter = Inter({ subsets: ["latin"] });

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
