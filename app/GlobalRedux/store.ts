"use client";

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Features/counterSlice";

import cartReducer from "./Features/cartSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,

    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
