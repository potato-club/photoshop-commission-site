import { configureStore } from '@reduxjs/toolkit';
import backgroundColorReducer from './slice/settingModeSlice';

const store = configureStore({
  reducer: {
    darkModeOnOff: backgroundColorReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
