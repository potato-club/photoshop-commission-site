import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { confirmModal, detailData, requestModal } from './slice';
const store = configureStore({
  reducer: {
    detailData: detailData.reducer,
    confirmModal: confirmModal.reducer,
    requestModal: requestModal.reducer
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
