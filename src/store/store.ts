import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authStepReducer from "./slices/authStep/AuthStepSlice";
import userReducer from "./slices/user/UserSlice";
import passwordRecoveryStepReducer from "./slices/passwordRecoveryStep/passwordRecoveryStepSlice";
import mobileSidebarReducer from "./slices/mobileSidebar/mobileSidebarSlice";
import searchBoxReducer from "./slices/searchbox/searchBoxSlice";
import arrangementReducer from "./slices/arrangement/arrangementSlice";

const combinedReducers = combineReducers({
  authStep: authStepReducer,
  passwordRecoveryStep: passwordRecoveryStepReducer,
  mobileSidebar: mobileSidebarReducer,
  user: userReducer,
  searchBox: searchBoxReducer,
  arrangement: arrangementReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === "user/logoutUser") {
    state = undefined;
  }
  return combinedReducers(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NEXT_PUBLIC_NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
