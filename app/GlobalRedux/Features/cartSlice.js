"use client";
import { createSlice } from "@reduxjs/toolkit";

export const getBasketTotal = (items) =>
  items.reduce((amount, item) => item.price + amount, 0);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const { id, item,description, ratings, freeShipping, price, productImage } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ id, item,description, freeShipping, ratings, price, productImage, quantity: 1 });
      }
    },
    addItemWithQuantity: (state, action) => {
      const { id, item, price, productImage, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if(quantity === 0) {
        return
      }
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ id, item, price, productImage, quantity });
      }
    },

    addQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
        if (existingItem.quantity === 0) {
          state.items = state.items.filter((item) => item.id !== id);
        }
      }
    },


    removeItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity -= 1;
        if (existingItem.quantity === 0) {
          state.items = state.items.filter((item) => item.id !== id);
        }
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.items = state.items.filter((item) => item.id !== id);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem,removeFromCart, clearCart, addQuantity, addItemWithQuantity  } = cartSlice.actions;

export default cartSlice.reducer;
