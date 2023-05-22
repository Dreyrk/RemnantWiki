import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components";
import "./index.css";

import Router from "./Router";
import { theme } from "./style/theme.js";
import CurrentUserContextProvider from "./contexts/CurrentUserContext";

const Page = styled.div`
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow-y: auto;
  overflow-x: hidden;
  font-family: "Roboto", sans-serif;
  position: relative;
  background-color: ${theme.colors.noir};
`;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Page>
      <CurrentUserContextProvider>
        <Router />
      </CurrentUserContextProvider>
    </Page>
  </React.StrictMode>
);
