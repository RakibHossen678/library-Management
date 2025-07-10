import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import Router from "./router/routes.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { Toaster } from "react-hot-toast";

const isMobile = window.innerWidth < 640;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 5000,
            style: {
              background: "white",
              fontSize: isMobile ? "13px" : "17px",
              margin: isMobile ? "20px 0" : "40px 0",
              padding: isMobile ? "8px 12px" : "12px 16px",
              fontFamily: "var(--font-jakarta)",
            },
          }}
        />
        <Router />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
