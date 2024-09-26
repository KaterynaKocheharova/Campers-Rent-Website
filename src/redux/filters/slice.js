import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = {
  location: "",
  vehicleType: "",
  vehicleEquipment: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filterInitialState,
  reducers: {
    changeLocationFilter(state, action) {
      state.location = action.payload;
    },
    changeVehicleTypeFilter(state, action) {
      state.vehicleType = action.payload;
    },
    changeVehicleEquipmentFilter(state, action) {
      const currentAmenity = action.payload;
      if (state.vehicleEquipment.includes(currentAmenity)) {
        state.vehicleEquipment = state.vehicleEquipment.filter(
          (vehicleAmenity) => vehicleAmenity !== currentAmenity
        );
      } else {
        state.vehicleEquipment.push(currentAmenity);
      }
    },
  },
});

export const {
  changeLocationFilter,
  changeVehicleTypeFilter,
  changeVehicleEquipmentFilter,
} = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
