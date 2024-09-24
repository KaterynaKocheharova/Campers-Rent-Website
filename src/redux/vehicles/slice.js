import { createSlice } from "@reduxjs/toolkit";
import { fetchVehicles } from "./operations";

export const handleError = (state, action) => {
  state.loading = null;
  state.error = action.payload;
};

const vehiclesInitialState = {
  items: [],
  loading: null,
  error: null,
};

const vehiclesSlice = createSlice({
  name: "contacts",
  initialState: vehiclesInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVehicles.pending, (state) => {
        state.loading = "fetching-vehicles";
      })
      .addCase(fetchVehicles.fulfilled, (state, action) => {
        state.error = null;
        state.loading = null;
        state.items = action.payload;
      })
      .addCase(fetchVehicles.rejected, handleError);
  },
});

export const vehiclesReducer = vehiclesSlice.reducer;
