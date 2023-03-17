import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: { searchedItem: "" },
  reducers: {
    
    setSearchItem(state, action) {
        state.searchedItem = action.payload
        //console.log("search:", state.searchedItem)
    },
    // setCategoryItem(state, action) {
    //   //console.log('catItem:', action.payload)
    //   state.categoryItem = action.payload.map(cat=> ({
    //     id:cat._id,
    //     item: cat.item,
    //     price: cat.price,
    //     description: cat.description,
    //     productImage: cat.productImage,
    //     ratings: cat.ratings,
    //     slug: cat.slug,
    //   }));
    // },
    // removeCategory(state, action) {
    //   //console.log('removeCat:', action.payload)
    //   state.categoryItem = action.payload
    //   state.selectedCategories = action.payload;
      
    //   //console.log('selectedCategory:', state.selectedCategories)
    // }

    // ... other reducers
  },
});

export const { setSearchItem } = searchSlice.actions;

export default searchSlice.reducer;
