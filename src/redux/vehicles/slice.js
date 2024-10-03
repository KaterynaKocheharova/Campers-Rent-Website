import { createSlice } from "@reduxjs/toolkit";
import { fetchVehicles } from "./operations";

export const handleError = (state, action) => {
  state.loading = false;
  state.error = action.payload;
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
      .addCase(fetchVehicles.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchVehicles.fulfilled, (state, action) => {
        const { items, total } = action.payload;

        state.error = null;
        state.loading = false;
        state.items = [...state.items, ...items];
        state.totalItems = total;
      })
      .addCase(fetchVehicles.rejected, handleError);
  },
  reducers: {
    cleanVehicles: (state) => {
      state.items = [];
    },
  },
});

export const { cleanVehicles } = vehiclesSlice.actions;
export const vehiclesReducer = vehiclesSlice.reducer;
