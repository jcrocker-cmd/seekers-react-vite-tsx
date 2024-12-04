import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import navbarReducer from "./navbar/navbarSlice";
import formReducer from "./form/formSlice";
import loadingReducer from "./loading/loadingSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    navbar: navbarReducer,
    form: formReducer,
    loading: loadingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
