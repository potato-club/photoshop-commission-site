import { createSlice } from '@reduxjs/toolkit';
import { customColor, customColorType } from 'src/constants/customColor';

interface IInitialState {
  mode: {
    fontColor: keyof customColorType;
    backgroundColor: string;
  };
}

const initialState: IInitialState = {
  mode: {
    fontColor: 'black',
    backgroundColor: 'white',
  },
};

export const settingModeSlice = createSlice({
  name: 'settingMode',
  initialState,
  reducers: {
    whiteMode(state) {
      state.mode = {
        fontColor: 'black',
        backgroundColor: 'white',
      };
    },

    blackMode(state) {
      state.mode = {
        fontColor: 'white',
        backgroundColor: `${customColor.black}D0`,
      };
    },
  },
});

export const { whiteMode, blackMode } = settingModeSlice.actions;
export default settingModeSlice.reducer;
