"use client";

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Features/counterSlice";
import cartReducer from "./Features/cartSlice";

const savedCart = localStorage.getItem('cart');
const preloadedState = savedCart ? { cart: { items: JSON.parse(savedCart) } } : {};

export const store = configureStore({
  reducer: {
    counter: counterReducer,

    cart: cartReducer,
  },
  preloadedState,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
