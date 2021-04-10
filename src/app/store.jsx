import { configureStore } from "@reduxjs/toolkit";
import registrationReducer from "../feature/Registration/registrationSlice";
import { applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

const logger = createLogger({
  collapsed: true,
  diff: true,
});

export const store = configureStore({
  reducer: { registrationReducer },
  applyMiddleware: applyMiddleware(logger),
});
