// src/state/formSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  content?: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
  content: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<FormState>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.message = action.payload.message;
      state.content = action.payload.content;
    },
    resetFormData: (state) => {
      state.name = "";
      state.email = "";
      state.phone = "";
      state.message = "";
      state.content = "";
    },
  },
});

export const { setFormData, resetFormData } = formSlice.actions;

export default formSlice.reducer;
