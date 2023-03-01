import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: { selectedCategories: [], categoryItem:[] },
  reducers: {
    
    toggleCategory(state, action) {
      console.log('state:', state.selectedCategories )
      const index = state.selectedCategories.indexOf(action.payload);
      console.log('index:', index)
      console.log(action.payload)
      if (index === -1) {
        
        state.selectedCategories.push(action.payload);
      } else {
        state.selectedCategories.splice(index, 1);
      }
    },
    setCategoryItem(state, action) {
      console.log('catItem:', action.payload)
      state.categoryItem = action.payload.map(cat=> ({
        item: cat.item,
        price: cat.price,
        description: cat.description,
        productImage: cat.imageUrl,
        ratings: cat.ratings,
        slug: cat.slug,
      }));
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
