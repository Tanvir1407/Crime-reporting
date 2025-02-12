import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Api/Counter";
import divisionReducer from "../Api/Division";
const store = configureStore({
  reducer: {
    counter: counterReducer, 
    division: divisionReducer, 
  },
});

export default store;
