import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import pageData from "@/data/index.json";
import { Blog } from "@/typings/blog";

export interface ArrangementState {
  value: Blog[];
  show: boolean;
}

const getInitialArrangement = () => {
  if (typeof window !== "undefined") {
    const { blogs } = pageData;
    return blogs;
  }
  return [];
};

const initialState: ArrangementState = {
  value: getInitialArrangement(),
  show: false,
};

export const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    setBlogsShow: (state, action: PayloadAction<boolean>) => {
      state.show = action.payload;
    },
  },
});

export const { setBlogsShow } = blogsSlice.actions;

export default blogsSlice.reducer;
