import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  show: boolean;
}

const initialState: InitialState = {
  show: false,
};

const mobileSidebarSlice = createSlice({
  name: "mobileSidebar",
  initialState: initialState,
  reducers: {
    showMobileSidebar: (state) => {
      state.show = true;
    },
    hideMobileSidebar: (state) => {
      state.show = false;
    },
  },
});

export const { showMobileSidebar, hideMobileSidebar } =
  mobileSidebarSlice.actions;
export default mobileSidebarSlice.reducer;
