import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ArrangementState {
  value: string;
}

const getInitialArrangement = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("arrangement") || "single";
  }
  return "single"; // Set a default value for server-side rendering
};

const initialState: ArrangementState = {
  value: getInitialArrangement(),
};

export const arrangementSlice = createSlice({
  name: "arrangement",
  initialState,
  reducers: {
    setArrangement: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("arrangement", action.payload);
      }
    },
  },
});

export const { setArrangement } = arrangementSlice.actions;

export default arrangementSlice.reducer;
