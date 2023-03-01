import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: { categoryName: "", categoryItem:[] },
  reducers: {
    setCategoryName(state, action) {
      state.categoryName = action.payload;
    },
    setCategoryItem(state, action) {
      state.categoryItem.push(action.payload);
    },

    // ... other reducers
  },
});

export const { setCategoryName, setCategoryItem } = categorySlice.actions;

export default categorySlice.reducer;
