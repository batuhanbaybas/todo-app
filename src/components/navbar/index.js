import { Button } from "antd";
import React, { useState } from "react";
import TodoActionModal from "../modals/todo-action-modal";

const NavBar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          padding: "1rem 0"
        }}
      >
        <Button onClick={() => setVisible(true)} type="primary">
          Add New
        </Button>
      </nav>
      <TodoActionModal
        open={visible}
        onCancel={() => setVisible(false)}
        title={"Add Todo"}
      />
    </>
  );
};

export default NavBar;
