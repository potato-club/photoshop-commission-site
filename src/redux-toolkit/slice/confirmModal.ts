import { createSlice } from '@reduxjs/toolkit';

export const confirmModal = createSlice({
  name: 'confirmModal',
  initialState: { value: false },
  reducers: {
    openConfirmModal: (state) => {
      state.value = true;
    },
    closeConfirmModal: (state) => {
      state.value = false;
    },
  },
});

export const { openConfirmModal, closeConfirmModal } = confirmModal.actions;