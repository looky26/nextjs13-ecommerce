import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: { selectedCategories: [], categoryItem:[] },
  reducers: {
    toggleCategory(state, action) {
      const index = state.selectedCategories.indexOf(action.payload);
      if (index === -1) {
        state.selectedCategories.push(action.payload);
      } else {
        state.selectedCategories.splice(index, 1);
      }
    },
    setCategoryItem(state, action) {
      state.categoryItem.push(action.payload);
    },
    removeCategory(state, action) {
      const index = state.selectedCategories.indexOf(action.payload);
      if (index !== -1) {
        state.selectedCategories.splice(index, 1);
      }
    }

    // ... other reducers
  },
});

export const { toggleCategory, setCategoryItem } = categorySlice.actions;

export default categorySlice.reducer;
