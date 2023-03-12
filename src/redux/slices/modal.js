import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    SHOW_MODAL: (state) => {
      state.modal = !state.modal;
    },
  },
});

export const { SHOW_MODAL } = modalSlice.actions;

export default modalSlice.reducer;
