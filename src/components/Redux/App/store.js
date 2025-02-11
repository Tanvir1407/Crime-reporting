import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Api/Counter";
const store = configureStore({
  reducer: {
    counter: counterReducer, // Register your slice reducer
  },
});

export default store;
