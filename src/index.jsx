import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { App } from "./App";
import { GetLead } from "./screens/GetLead";
import "./global.css";

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/get-lead",
    element: <GetLead />,
  },
]);

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
