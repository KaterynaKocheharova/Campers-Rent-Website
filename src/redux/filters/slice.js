import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = {
  location: "",
  vehicleType: "",
  vehicleAmenities: [],
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
    changeVehicleAmenitiesFilter(state, action) {
      const currentAmenity = action.payload;
      if (state.vehicleAmenities.includes(currentAmenity)) {
        state.vehicleAmenities = state.vehicleAmenities.filter(
          (vehicleAmenity) => vehicleAmenity !== currentAmenity
        );
      } else {
        state.vehicleAmenities.push(currentAmenity);
      }
    },
  },
});

export const {
  changeLocationFilter,
  changeVehicleTypeFilter,
  changeVehicleAmenitiesFilter,
} = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
