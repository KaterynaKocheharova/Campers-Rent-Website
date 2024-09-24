import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../filters/selectors";

export const selectVehicles = (state) => state.vehicles.items;

export const selectFilteredVehicles = createSelector(
  [selectVehicles, selectFilter],
  (contacts, filter) => {}
);

export const selectIsLoading = (state) => state.vehicles.loading;
export const selectError = (state) => state.vehicles.error;
