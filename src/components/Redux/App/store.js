import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Api/Counter";
import divisionReducer from "../Api/Division";

import authReducer from "../Api/Auth";
const store = configureStore({
  reducer: {
    counter: counterReducer, 
    division: divisionReducer, 
    auth: authReducer,

import crimePostReducer from "../Api/CrimePost";
const store = configureStore({
  reducer: {
    counter: counterReducer,
    division: divisionReducer,
    crimePost: crimePostReducer,

  },
});

export default store;
