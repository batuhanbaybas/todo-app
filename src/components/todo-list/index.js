import useHandlePage from "@/hooks/useHandlePage";
import { Badge, Button, Col, List, Row, Space, Typography } from "antd";
import Link from "next/link";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import TodoActionModal from "../modals/todo-action-modal";
import { useDispatch } from "react-redux";
import { removeTodo } from "@/context/feature/todo-slice";
const { Item } = List;
const { Title } = Typography;
const { Text } = Typography;

const TodoList = ({ items, status }) => {
  const dispatch = useDispatch();
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
  const handleDelete = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <>
      <List
        header={
          <Row gutter={24} align={"middle"}>
            <Col span={8}>
              <Link href={`/${pageOptions.backLink}`}>
                {pageOptions.backStatus}
              </Link>
            </Col>
            <Col className="t-center" span={8}>
              <Title className={"responsive-t-size"} level={3}>
                Status : {status}
              </Title>
            </Col>
            <Col className="t-right" span={8}>
              <Link href={`/${pageOptions.link}`}>
                {pageOptions.nextStatus}
              </Link>
            </Col>
          </Row>
        }
        bordered
        dataSource={items}
        renderItem={(todo) => (
          <Item
            style={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <div>
              <Button
                style={{
                  marginRight: "1rem"
                }}
                type="ghost"
                onClick={() => handleTodo(todo)}
              >
                <EditOutlined />
              </Button>
              <Text
                type={
                  todo.status === "todo"
                    ? "default"
                    : todo.status === "onProgress"
                    ? "warning"
                    : "success"
                }
              >
                {todo.todo}
              </Text>
            </div>
            <div>
              <Badge
                style={{
                  marginRight: "1rem"
                }}
                status={
                  todo.status == "onProgress"
                    ? "warning"
                    : todo.status == "completed"
                    ? "success"
                    : "default"
                }
                text={
                  todo.status == "onProgress"
                    ? "On Progress"
                    : todo.status == "completed"
                    ? "Completed"
                    : "Todo"
                }
              />

              <Button danger={true} onClick={() => handleDelete(todo.id)}>
                <DeleteOutlined />
              </Button>
            </div>
          </Item>
        )}
      />
      <TodoActionModal
        open={modalState.visible}
        onCancel={() => setModalState({ visible: false, id: null })}
        title={"Edit Todo"}
        data={modalState.data}
      />
    </>
  );
};

export default TodoList;
