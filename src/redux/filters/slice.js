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
      const { vehicleType, location, vehicleEquipment, transmission } =
        action.payload;
      state.location = location;
      state.vehicleType = vehicleType;
      state.vehicleEquipment = vehicleEquipment;
      state.transmission = transmission;
    },
    cleanFilters(state) {
      state.location = "";
      state.vehicleType = "";
      state.vehicleEquipment = [];
      state.transmission = "";
    },
  },
});

export const { changeFilter, cleanFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
