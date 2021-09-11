import React from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Hello } from "./components/Hello/Hello";
import { ElevatorPitch } from "./components/ElevatorPitch/ElevatorPitch";
import { ConfiguredThemeProvider } from "./components/context/ConfiguredThemeProvider/ConfiguredThemeProvider";

const FullPageContainer = styled.article`
  position: fixed;
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.fg};
  transition: background-color 0.5s;

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
        <BrowserRouter>
          <Switch>
            <Route path="/elevator-pitch/:id" component={ElevatorPitch} />
            <Route path="/">
              <Hello />
            </Route>
          </Switch>
        </BrowserRouter>
      </FullPageContainer>
    </ConfiguredThemeProvider>
  );
};
