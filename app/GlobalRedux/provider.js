"use client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "next-themes";
import { store, persistor } from "./store";

export function Providers({ children }) {
  return (
    <Provider store={store}>
      <ThemeProvider defaultTheme="dark">
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </ThemeProvider>
    </Provider>
  );
}
