import { createSlice } from '@reduxjs/toolkit';

export const requestModal = createSlice({
  name: 'requestModal',
  initialState: { value: false },
  reducers: {
    openRequestModal: (state) => {
      state.value = true;
    },
    closeRequestModal: (state) => {
      state.value = false;
    },
  },
});

export const { openRequestModal, closeRequestModal } = requestModal.actions;
