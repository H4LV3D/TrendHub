import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  show: boolean;
}

const initialState: InitialState = {
  show: false,
};

const searchBoxSlice = createSlice({
  name: "mobileSidebar",
  initialState: initialState,
  reducers: {
    showSearchBox: (state) => {
      state.show = true;
    },
    hideSearchBox: (state) => {
      state.show = false;
    },
  },
});

export const { showSearchBox, hideSearchBox } =
  searchBoxSlice.actions;
export default searchBoxSlice.reducer;
