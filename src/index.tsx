import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LargeDesktop } from "./screens/LargeDesktop";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <LargeDesktop />
  </StrictMode>,
);
