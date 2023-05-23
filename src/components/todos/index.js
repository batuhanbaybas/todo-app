import useHandlePage from "@/hooks/useHandlePage";
import { Button, List, Space, Typography } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import TodoActionModal from "../modals/todo-action-modal";
const { Item } = List;
const { Title } = Typography;
const { Text } = Typography;
const Todos = ({ items, status }) => {
  const [modalState, setModalState] = useState({
    visible: false,
    data: null
  });
  const { pageOptions } = useHandlePage({ status });
  const handleTodo = (data) => {
    setModalState({
      visible: true,
      data
    });
  };

  return (
    <>
      <List
        header={
          <Space
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            {console.log("page options", pageOptions)}
            <Link href={`/${pageOptions.backLink}`}>Back</Link>
            <Title level={3}>Status : {status}</Title>
            <Link href={`/${pageOptions.link}`}>{pageOptions.nextStatus}</Link>
          </Space>
        }
        bordered
        dataSource={items}
        renderItem={(todo) => (
          <Item
            style={{
              cursor: "pointer"
            }}
            onClick={() => handleTodo(todo)}
          >
            <Text
              type={
                todo.status === "todo"
                  ? "default"
                  : todo.status === "onProgress"
                  ? "warning"
                  : "success"
              }
            >
              - {todo.todo}
            </Text>
          </Item>
        )}
      />
      <TodoActionModal
        visible={modalState.visible}
        onCancel={() => setModalState({ visible: false, id: null })}
        title={"Edit Todo"}
        data={modalState.data}
      />
    </>
  );
};

export default Todos;
