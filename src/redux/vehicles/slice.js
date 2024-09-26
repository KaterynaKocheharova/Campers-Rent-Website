import { createSlice } from "@reduxjs/toolkit";
import { fetchVehicles } from "./operations";

export const handleError = (state, action) => {
  state.loading = null;
  state.error = action.payload;
};

const vehiclesInitialState = {
  items: [],
  currentPage: 0,
  totalItems: 0,
  loading: null,
  error: null,
};

const vehiclesSlice = createSlice({
  name: "vehicles",
  initialState: vehiclesInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVehicles.pending, (state) => {
        state.loading = "fetching-vehicles";
      })
      .addCase(fetchVehicles.fulfilled, (state, action) => {
        const { items, totalItems } = action.payload;
        state.error = null;
        state.loading = null;
        state.items = items;
        state.totalItems = totalItems;
      })
      .addCase(fetchVehicles.rejected, handleError);
  },
  reducers: {
    changeCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { changeCurrentPage } = vehiclesSlice.actions;
export const vehiclesReducer = vehiclesSlice.reducer;
