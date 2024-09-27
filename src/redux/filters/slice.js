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
    changeVehicleTransmissionFilter(state) {
      if (state.transmission === "Manual" || state.transmission === "") {
        state.transmission = "Automatic";
      } else {
        state.transmission = "";
      }
    },
  },
});

export const {
  changeLocationFilter,
  changeVehicleTypeFilter,
  changeVehicleEquipmentFilter,
  changeVehicleTransmissionFilter,
} = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
