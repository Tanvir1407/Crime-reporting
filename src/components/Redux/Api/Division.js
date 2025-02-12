import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Thunks for API Calls
export const getAllDivision = createAsyncThunk(
  "divisions/divisions",
  async () => {
    const response = await fetch("https://bdapis.com/api/v1.2/divisions")
      .then((res) => res.json())
      .then((data) => data);
    return response.data;
  }
);
export const getAllDistrict = createAsyncThunk(
  "divisions/district",
  async (arg) => {
    const response = await fetch(`https://bdapis.com/api/v1.2/division/${arg}`)
      .then((res) => res.json())
      .then((data) => data);
    return response.data;
  }
);

// Initial state
const initialState = {
  division: null,
  district: null,
  error: null,
  loading: false,
};

// Create slice
const divisionSlice = createSlice({
  name: "division",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getAllDivision.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllDivision.fulfilled, (state, action) => {
        state.loading = false;
        state.division = action.payload;
      })
      .addCase(getAllDivision.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(getAllDistrict.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllDistrict.fulfilled, (state, action) => {
        state.loading = false;
        state.district = action.payload;
      })
      .addCase(getAllDistrict.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export reducer
export default divisionSlice.reducer;
