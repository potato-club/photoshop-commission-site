import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { nickName } from './slice';

const store = configureStore({
  reducer: {
    nickName: nickName.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
