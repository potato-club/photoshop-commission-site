import { createSlice } from '@reduxjs/toolkit';

export const nickName = createSlice({
  name: 'nickName',
  initialState: { value: 'GUEST' },
  reducers: {
    rename: (state, action) => {
      // state.value = state.value + action.step; // 액션 직접 주고받았을때 (step 은 내가 임의로 전달한 변수명)
      state.value = action.payload; // 자동으로 생성된 액션을 받았을때 (매개변수는 payload)
    },
    resetName: (state, action) => {
      state.value = "GUEST";
    }
  },
});

export const { rename } = nickName.actions;
