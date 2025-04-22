import React from "react";
import { LargeDesktop } from "./screens/LargeDesktop";
import { ResponsiveProvider } from "./ResponsiveContext";

export const App = () => {
  return (
    <ResponsiveProvider>
      <LargeDesktop />
    </ResponsiveProvider>
  );
};