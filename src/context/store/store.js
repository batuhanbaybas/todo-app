import languageSlice from "../feature/language-slice";
import todoSlice from "../feature/todo-slice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    todo: todoSlice
  }
});
