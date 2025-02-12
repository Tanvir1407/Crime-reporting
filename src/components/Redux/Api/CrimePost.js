import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const initialState = {
  list: null,
  CrimePost: null,
  total: null,
  error: "",
  loading: false,
};

// export const loadAllCrimePostPaginated = createAsyncThunk(
//   "CrimePost/loadAllCrimePostPaginated",
//   async (arg) => {
//     try {
//       let query = queryGenerator(arg);
//       const { data } = await axios.get(`post/crimes?${query}`);
//       return toast.success(data);
//     } catch (error) {
//       return toast.error(error);
//     }
//   }
// );
export const loadAllCrimePost = createAsyncThunk(
  "CrimePost/loadAllCrimePost",
  async () => {
    try {
      const { data } = await axios.get(`post/crimes/`);
      return toast.success(data);
    } catch (error) {
      return toast.error(error);
    }
  }
);

export const loadSingleCrimePost = createAsyncThunk(
  "CrimePost/loadSingleCrimePost",
  async (id) => {
    try {
      const { data } = await axios.get(`post/crimes/${id}/`);
      return toast.success(data);
    } catch (error) {
      return toast.error(error);
    }
  }
);

export const addCrimePost = createAsyncThunk(
  "CrimePost/addCrimePost",
  async (values) => {
    try {
      const { data } = await axios({
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        url: `post/crimes/`,
        data: values,
      });

      return toast.success(data, "CrimePost Created Successfully");
    } catch (error) {
      return toast.error(error, true);
    }
  }
);

export const updateCrimePost = createAsyncThunk(
  "CrimePost/updateCrimePost",
  async ({ id, values }) => {
    try {
      const { data } = await axios({
        method: "put",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        url: `post/crimes/${id}/`,
        data: values,
      });
      return toast.success(data, "CrimePost Updated Successfully");
    } catch (error) {
      return toast.error(error);
    }
  }
);

export const deleteCrimePost = createAsyncThunk(
  "CrimePost/deleteCrimePost",
  async ({ id, status }) => {
    try {
      const { data } = await axios({
        method: "patch",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        url: `post/crimes/${id}/`,
        data: {
          status: status ? status : "false",
        },
      });

      return toast.success(data);
    } catch (error) {
      return toast.error(error, true);
    }
  }
);

const CrimePostSlice = createSlice({
  name: "CrimePost",
  initialState,
  reducers: {
    clearCrimePost: (state) => {
      state.CrimePost = null;
    },
    clearCrimePostList: (state) => {
      state.list = [];
    },
  },
  extraReducers: (builder) => {
    // 0) ====== builders for loadAllCrimePost ======
    builder.addCase(loadAllCrimePost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loadAllCrimePost.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload?.data;
    });

    // 1) ====== builders for loadAllCrimePostPaginated ======
    // builder.addCase(loadAllCrimePostPaginated.pending, (state) => {
    //   state.loading = true;
    // });

    // builder.addCase(loadAllCrimePostPaginated.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.list = action.payload?.data?.getAllCrimePost;
    //   state.total = action.payload?.data?.totalCrimePost;
    // });
    // 2) ====== builders for addCrimePost ======
    builder.addCase(addCrimePost.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(addCrimePost.fulfilled, (state) => {
      state.loading = false;
    });
    // 3) ====== builders for loadSingleCrimePost ======
    builder.addCase(loadSingleCrimePost.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(loadSingleCrimePost.fulfilled, (state, action) => {
      state.loading = false;
      state.CrimePost = action?.payload?.data;
    });
    // 4) ====== builders for updateCrimePost ======
    builder.addCase(updateCrimePost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateCrimePost.fulfilled, (state) => {
      state.loading = false;
    });
    // 5) ====== builders for deleteCrimePost ======
    builder.addCase(deleteCrimePost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteCrimePost.fulfilled, (state) => {
      state.loading = false;
    });
  },
});

export default CrimePostSlice.reducer;
export const { clearCrimePost, clearCrimePostList } = CrimePostSlice.actions;
