import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  step: number;
  direction: "start" | "next" | "previous";
  selectedEmail: string;
}

const initialState: InitialState = {
  step: 0,
  direction: "start",
  selectedEmail: "",
};

const authStepSlice = createSlice({
  name: "authStep",
  initialState,
  reducers: {
    increaseAuthStep: (state) => {
      state.step += 1;
      state.direction = "next";
    },
    decreaseAuthStep: (state) => {
      state.step -= 1;
      state.direction = "previous";
    },
    selectAuthStep: (state, action: PayloadAction<InitialState>) => {
      state.step = action.payload.step;
      state.direction = action.payload.direction;
    },
    resetAuthStep: (state) => {
      state.step = 0;
      state.direction = "start";
    },
    setAuthStepSelectedEmail: (state, action: PayloadAction<string>) => {
      state.selectedEmail = action.payload;
    },
  },
});

export const {
  increaseAuthStep,
  decreaseAuthStep,
  selectAuthStep,
  resetAuthStep,
  setAuthStepSelectedEmail,
} = authStepSlice.actions;
export default authStepSlice.reducer;
