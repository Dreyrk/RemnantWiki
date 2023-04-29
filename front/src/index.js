import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components";
import "./index.css";

import Router from "./Router";
import { theme } from "./style/theme";

const Page = styled.div`
  height: 100vh;
  overflow-y: auto;
  font-family: "Roboto", sans-serif;
  position: relative;
  background-color: ${theme.colors.noir};
`;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Page>
      <Router />
    </Page>
  </React.StrictMode>
);
