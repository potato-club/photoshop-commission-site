import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { confirmModal, requestModal } from './slice';
const store = configureStore({
  reducer: {
    confirmModal: confirmModal.reducer,
    requestModal: requestModal.reducer
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
