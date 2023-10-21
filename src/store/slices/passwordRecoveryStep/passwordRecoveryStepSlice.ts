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

const passwordRecoveryStepSlice = createSlice({
  name: "passwordRecoveryStep",
  initialState,
  reducers: {
    increasePasswordRecoveryStep: (state) => {
      state.step += 1;
      state.direction = "next";
    },
    decreasePasswordRecoveryStep: (state) => {
      state.step -= 1;
      state.direction = "previous";
    },
    selectPasswordRecoveryStep: (
      state,
      action: PayloadAction<{
        step: number;
        direction: "start" | "next" | "previous";
      }>
    ) => {
      state.step = action.payload.step;
      state.direction = action.payload.direction;
    },
    resetPasswordRecoveryStep: (state) => {
      state.step = 0;
      state.direction = "start";
    },
    setPasswordRecoveryStepSelectedEmail: (
      state,
      action: PayloadAction<string>
    ) => {
      state.selectedEmail = action.payload;
    },
  },
});

export const {
  increasePasswordRecoveryStep,
  decreasePasswordRecoveryStep,
  selectPasswordRecoveryStep,
  resetPasswordRecoveryStep,
  setPasswordRecoveryStepSelectedEmail,
} = passwordRecoveryStepSlice.actions;
export default passwordRecoveryStepSlice.reducer;
