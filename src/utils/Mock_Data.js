import { configureStore } from "@reduxjs/toolkit";

import addBookReducer from "./addBook";

const appStore = configureStore({
  reducer: addBookReducer,  // import the reducer, not the action
});

export default appStore;
