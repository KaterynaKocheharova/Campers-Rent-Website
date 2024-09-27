import { createSlice } from "@reduxjs/toolkit";
import { fetchVehicles } from "./operations";

export const handleError = (state, action) => {
  state.loading = null;
  state.error = action.payload;
};

const vehiclesInitialState = {
  items: [],
  currentPage: 1,
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
        const { items, total } = action.payload;

        state.error = null;
        state.loading = null;
        if (state.currentPage === 1) {
          state.items = items;
        } else {
          state.items = [...state.items, ...items];
        }
        state.totalItems = total;
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
