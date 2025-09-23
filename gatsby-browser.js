import React from "react";
import { GlobalStyle } from "./src/styles/GlobalStyle";

export const wrapRootElement = ({ element }) => (
  <>
    <GlobalStyle />
    {element}
  </>
);
