import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { ToastContextProvider } from "./context/ToastContextProvider.jsx";
import { ModalContextProvider } from "./context/modalContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContextProvider>
      <ModalContextProvider>
        <App />
      </ModalContextProvider>
    </ToastContextProvider>
  </StrictMode>
);
