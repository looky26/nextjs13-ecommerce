// "use client";
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   basket: [],
// };

// export const getBasketTotal = (basket) =>
//   basket.reduce((amount, item) => item.price + amount, 0);

// const basketSlice = createSlice({
//   name: "basket",
//   initialState,
//   reducers: {
//     addToBasket: (state, action) => {
//       state.basket.push(action.payload);
//     },
//     removeFromBasket: (state, action) => {
//       let newBasket = [...state.basket];

//       //
//       const index = state.basket.findIndex(
//         (basketItems) => basketItems.id === action.payload
//       );

//       if (index >= 0) {
//         //item exists in basket, remove it..
//         newBasket.splice(index, 1);
//       } else {
//         console.warn(
//           `cant remove product (id: ${action.id}) as it's not on basket`
//         );
//       }

//       return { ...state, basket: newBasket };
//     },
//   },
// });

// export const { addToBasket } = basketSlice.actions;
// export const { removeFromBasket } = basketSlice.actions;
// export default basketSlice.reducer;
