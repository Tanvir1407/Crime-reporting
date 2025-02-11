import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

// Thunks for API Calls
export const fetchPosts = createAsyncThunk("counter/fetchPosts", async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const addPost = createAsyncThunk("counter/addPost", async (value) => {
  const response = await axios.post({
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    url: `url`,
    data: value,
  });
  return response.data;
});

export const updatePost = createAsyncThunk("counter/updatePost", async (updatedPost) => {
  const response = await axios.put(`${API_URL}/${updatedPost.id}`, updatedPost);
  return response.data;
});

export const deletePost = createAsyncThunk("counter/deletePost", async (postId) => {
  await axios.delete(`${API_URL}/${postId}`);
  return postId;
});

// Initial state
const initialState = {
  posts: [],
  status: "idle",
  error: null,
};

// Create slice
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        const index = state.posts.findIndex(post => post.id === action.payload.id);
        if (index !== -1) {
          state.posts[index] = action.payload;
        }
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter(post => post.id !== action.payload);
      });
  },
});

// Export actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Export reducer
export default counterSlice.reducer;
