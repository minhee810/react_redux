import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productReducer";

const store = configureStore({
  reducer: {
    auth: authenticateReducer,
    product: productReducer,
  },
});

export default store;
