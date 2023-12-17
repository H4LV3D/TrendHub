import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  icon: number;
}

const initialState: InitialState = {
  icon: 0,
};

const profileIcon = createSlice({
  name: "profileIcon",
  initialState,
  reducers: {
    selectProfileIcon: (state, action: PayloadAction<InitialState>) => {
      state.icon = action.payload.icon;
    },
    resetProfileIcon: (state) => {
      state.icon = 8;
    },
  },
});

export const { selectProfileIcon, resetProfileIcon } = profileIcon.actions;
export default profileIcon.reducer;
