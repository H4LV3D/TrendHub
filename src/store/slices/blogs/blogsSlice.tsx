import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import pageData from "@/data/index.json";

type Blog = {
  title: string;
  episode?: string;
  description?: string;
  readTime: string;
  date: string;
  article: {
    p: string;
  }[];
  link: string | number;
  image: string;
  tags?: string[];
  reactions?: {
    good: number;
    bad: number;
  };
};

interface ArrangementState {
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
