import { createSlice } from "@reduxjs/toolkit";
import { fetchVehicles } from "./operations";

export const handleError = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

export const handlePending = (state) => {
  state.loading = true;
  state.error = null;
};

const vehiclesInitialState = {
  items: [],
  totalItems: 0,
  loading: false,
  error: null,
};

const vehiclesSlice = createSlice({
  name: "vehicles",
  initialState: vehiclesInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVehicles.pending, handlePending)
      .addCase(fetchVehicles.fulfilled, (state, action) => {
        const { items, total, reset } = action.payload;
        state.error = null;
        state.loading = false;
        if (reset) {
          state.items = items;
        } else {
          state.items = [...state.items, ...items];
        }

        state.totalItems = total;
      })
      .addCase(fetchVehicles.rejected, handleError);
  },
});

export const { cleanVehicles } = vehiclesSlice.actions;
export const vehiclesReducer = vehiclesSlice.reducer;
