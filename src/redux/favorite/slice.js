import { createSlice } from "@reduxjs/toolkit";

const favoriteInitialState = {
  favIds: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: favoriteInitialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const { id } = action.payload;
      if (state.favIds.includes(id)) {
        state.favIds = state.favIds.filter((favId) => favId !== id);
      } else {
        state.favIds.push(id);
      }
    },
  },
});

export const { toggleFavorite } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
