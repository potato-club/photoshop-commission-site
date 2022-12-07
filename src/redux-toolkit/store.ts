import { configureStore } from '@reduxjs/toolkit';
import { detailData } from './slice';
const store = configureStore({
  reducer: {
    detailData: detailData.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
