import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = {
  location: "",
  vehicleType: "",
  transmission: "",
  vehicleEquipment: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filterInitialState,
  reducers: {
    changeFilter(state, action) {
      const { vehicleType, location, equipment, transmission } = action.payload;
      state.location = location;
      state.vehicleType = vehicleType;
      state.vehicleEquipment = equipment;
      state.transmission = transmission;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
