import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalVisible: false,
  selectedProject: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state, action) {
      state.isModalVisible = true;
      state.selectedProject = action.payload;
    },
    closeModal(state) {
      state.isModalVisible = false;
      state.selectedProject = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
