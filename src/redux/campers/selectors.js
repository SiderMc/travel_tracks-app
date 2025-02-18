export const selectCampers = (state) => state.campers.items;
export const selectCurrentPage = (state) => state.campers.currentPage;
export const selectLastPage = (state) => state.campers.isLastPage;
export const selectCamperById = (state) => state.campers.selectedCamper;
export const selectCampersLoading = (state) => state.campers.isLoading;
export const selectCampersError= (state) => state.campers.error;
export const selectFilterCampers = (state)=>state.campers.filter


