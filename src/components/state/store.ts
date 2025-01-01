import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import navbarReducer from "./navbar/navbarSlice";
import formReducer from "./form/formSlice";
import loadingReducer from "./loading/loadingSlice";
import submssionReducer from "./submission/submissionSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    navbar: navbarReducer,
    form: formReducer,
    loading: loadingReducer,
    submission: submssionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
