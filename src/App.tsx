import React from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ElevatorPitch } from "./components/ElevatorPitch/ElevatorPitch";
import { ConfiguredThemeProvider } from "./components/context/ConfiguredThemeProvider/ConfiguredThemeProvider";
import { Home } from "./components/pages/Home/Home";
import { Header } from "./components/Header/Header";

const FullPageContainer = styled.article`
  padding: 32px 32px;
  position: fixed;
  flex-direction: column;
  width: calc(100vw - 62px);
  height: calc(100vh - 62px);
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.fg};
  transition: background-color 0.5s;
  overflow-y: auto;

  /* Unvisited link  */
  p > a,
  a:visited,
  a:hover,
  a:active {
    color: #335cad;
  }
`;

export const App = () => {
  return (
    <ConfiguredThemeProvider>
      <FullPageContainer>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route path="/elevator-pitch/:id" component={ElevatorPitch} />
            <Route path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </FullPageContainer>
    </ConfiguredThemeProvider>
  );
};
