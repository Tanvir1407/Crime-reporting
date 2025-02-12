import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userRegister = createAsyncThunk("auth/register", async (value) => {
  try {
    const response = await axios.post("/user/register/", value, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Registration Error:", error);

    // Provide a meaningful error message
  }
});

export const userLogin = createAsyncThunk("auth/userLogin", async (value) => {
  try {
    const response = await axios.post("/user/login/", value, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    });
    return response.data;
  } catch (error) {
    console.error( error);

    // Provide a meaningful error message
  }
});

export const getLoggedUser = createAsyncThunk("auth/getLoggedUser", async (arg) => {
  try {
    const response = await axios.get(`/user/useraccounts/${arg}/`);
    return response.data;
  } catch (error) {
    console.error( error);

    // Provide a meaningful error message
  }
});

// Initial state
const initialState = {
  user: null,
  loggedUser: null,
  error: null,
  loading: false,
};

// Create slice
const authSlice = createSlice({
  name: "auth",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getLoggedUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getLoggedUser.fulfilled, (state, action) => {
        state.loading = false;
        state.loggedUser = action.payload;
      })
      .addCase(getLoggedUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

  },
});

// Export reducer
export default authSlice.reducer;
