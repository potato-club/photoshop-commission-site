import { createSlice } from '@reduxjs/toolkit';
import { BoardType } from "src/types/board.type";
type detailDataType = {
  data: BoardType;
  myPost: boolean;
}
export const detailData = createSlice({
  name: 'detailData',
  initialState: {
    data: {},
    myPost: false,
  } as detailDataType,
  reducers: {
    newDetail: (state, action) => {
      state.data = action.payload;
    },
    checkMyPost: (state, action) => {
      state.myPost = action.payload;
    },
    exitDetail: (state) => {
      state.data = {};
    }
  },
});

export const { newDetail, checkMyPost, exitDetail } = detailData.actions;
