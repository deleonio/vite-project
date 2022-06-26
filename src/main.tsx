import { register } from "@kolibri/core";
import { defineCustomElements, KolKolibri  } from "@kolibri/react";
import { BMF } from "@kolibri/themes";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

register(BMF, defineCustomElements)
  .then(() => {
    ReactDOM.createRoot(document.getElementById("root")!).render(
      <React.StrictMode>
        <KolKolibri></KolKolibri>
        <App />
      </React.StrictMode>
    );
  })
  .catch(console.warn);
