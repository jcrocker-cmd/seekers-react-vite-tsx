import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./components/state/store.ts";
import ThreeCursor from "./components/common/ThreeCursor.tsx";
import ScrollUp from "./components/common/ScrollUp.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ScrollUp></ScrollUp>
      <App />
    </Provider>
  </StrictMode>
);
