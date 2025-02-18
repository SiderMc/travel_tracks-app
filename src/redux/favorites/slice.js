import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleIsFavorites(state, action) {
      const index = state.favorites.indexOf(action.payload);
      index === -1
        ? state.favorites.push(action.payload)
        : state.favorites.splice(index, 1);
    },
  },
});
export const { toggleIsFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
