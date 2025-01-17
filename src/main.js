import "./styles/main.css";
import { createElement as h, StrictMode } from "react";
import { createRoot } from "react-dom/client";

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(
    h(
      StrictMode,
      null,
      h("h1", { className: "Headline", children: "Hello World!!" })
    )
  );
}
