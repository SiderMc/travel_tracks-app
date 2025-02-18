import { createSlice } from '@reduxjs/toolkit';
import { getCamperById, getCampers } from './operations';

const initialState = {
  items: [],
  selectedCamper: null,
  filter: {},
  currentPage: 1,
  isLastPage: false,
  isLoading: false,
  error: null,
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    clearFilter(state) {
      state.items = [];
      state.filter = {};
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCampers.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items =
          action.payload.page === 1
            ? action.payload.data.items
            : [...state.items, ...action.payload.data.items];
        state.filter = action.payload.filters;
        state.currentPage = action.payload.page;
        state.isLastPage = action.payload.isLastPage;
      })
      .addCase(getCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getCamperById.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCamperById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedCamper = action.payload;
      })
      .addCase(getCamperById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { clearFilter } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
