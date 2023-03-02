import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: { selectedCategories: [], categoryItem:[] },
  reducers: {
    
    toggleCategory(state, action) {
      console.log('state:', state.selectedCategories )
      const index = state.selectedCategories.indexOf(action.payload);
      //console.log('index:', index)
      //console.log(action.payload)
      if (index === -1) {
        
        state.selectedCategories.push(action.payload);
      } else {
        state.selectedCategories.splice(index, 1);
      }
    },
    setCategoryItem(state, action) {
      console.log('catItem:', action.payload)
      state.categoryItem = action.payload.map(cat=> ({
        id:cat._id,
        item: cat.item,
        price: cat.price,
        description: cat.description,
        productImage: cat.imageUrl,
        ratings: cat.ratings,
        slug: cat.slug,
      }));
    },
    removeCategory(state, action) {
      console.log('removeCat:', action.payload)
      state.categoryItem = action.payload
      state.selectedCategories = action.payload;
      
      console.log('selectedCategory:', state.selectedCategories)
    }

    // ... other reducers
  },
});

export const { toggleCategory, setCategoryItem, removeCategory } = categorySlice.actions;

export default categorySlice.reducer;
