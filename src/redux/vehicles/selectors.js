export const selectVehicles = (state) => state.vehicles.items;
export const selectIsLoadingVehicles = (state) => state.vehicles.loading;
export const selectError = (state) => state.vehicles.error;
export const selectFetchVehiclesError = (state) => state.vehicles.error;
export const selectTotalItems = (state) => state.vehicles.totalItems;
export const selectCurrentPage = (state) => state.vehicles.currentPage;
