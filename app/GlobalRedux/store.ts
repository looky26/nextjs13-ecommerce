"use client";

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Features/counterSlice";
import cartReducer from "./Features/cartSlice";
import categoryReducer from './Features/categorySlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedCartReducer = persistReducer(persistConfig, cartReducer);
const persistedCategoryReducer = persistReducer(persistConfig, categoryReducer);

export const store = configureStore({
  reducer: {
    counter: counterReducer,

    cart: persistedCartReducer,
    category: persistedCategoryReducer,
  },
  
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
