import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/users";
import modalReducer from "./slices/modal";

const rootReducer = combineReducers({
  users: usersReducer,
  modal: modalReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  // devTools: false,
});
