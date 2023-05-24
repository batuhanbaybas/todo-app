import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: []
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.todos.push({ ...action.payload });
      },
      prepare: (todo) => {
        return {
          payload: {
            id: nanoid(),
            todo: todo.todo,
            status: todo.status
          }
        };
      }
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, todo, status } = action.payload;
      console.log("payload", action.payload);
      const existingTodo = state.todos.find((todo) => todo.id === id);
      if (existingTodo) {
        existingTodo.todo = todo;
        existingTodo.status = status;
      }
    }
  }
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export const todoOnProgress = (state) =>
  state.todo.todos.filter((todo) => todo.status === "onProgress");
export const completedTodo = (state) =>
  state.todo.todos.filter((todo) => todo.status === "completed");
export const todo = (state) =>
  state.todo.todos.filter((todo) => todo.status === "todo");
export const allTodos = (state) => state.todo.todos;
export default todoSlice.reducer;
