import { addTodo, updateTodo } from "@/context/feature/todo-slice";
import { todoStatus } from "@/helpers/todo-status";
import { Col, Form, Input, Modal, Row, Select } from "antd";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
const { Option } = Select;
const TodoActionModal = ({ title, data, ...other }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  useEffect(() => {
    if (!data) return;
    form.setFieldsValue(data);
  }, [data]);

  const onFinish = (values) => {
    if (data) dispatch(updateTodo({ id: data.id, ...values }));
    if (!data) dispatch(addTodo(values));
    form.resetFields();
    other.onCancel();
  };

  return (
    <Modal
      okText={data ? "Update" : "Add"}
      onOk={() => form.submit()}
      title={title}
      {...other}
    >
      <Form onFinish={onFinish} form={form} layout="vertical">
        <Row gutter={24}>
          <Col span={16}>
            <Form.Item
              label="Todo"
              name="todo"
              rules={[{ required: true, message: "Please input your todo!" }]}
            >
              <Input autoComplete={false} placeholder="Enter Todo" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Status"
              initialValue={todoStatus[0].key}
              name="status"
            >
              <Select defaultValue={todoStatus[0].value}>
                {todoStatus.map((status) => (
                  <Option key={status.key}> {status.value} </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default TodoActionModal;
