import React from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ElevatorPitch } from "./components/ElevatorPitch/ElevatorPitch";
import { ConfiguredThemeProvider } from "./components/context/ConfiguredThemeProvider/ConfiguredThemeProvider";
import { Home } from "./components/pages/Home/Home";
import { Header } from "./components/Header/Header";
import { Blog, blogData } from "./components/pages/Blog/Blog";

const FullPageContainer = styled.article`
  padding: 128px 32px;
  position: fixed;
  flex-direction: column;
  width: calc(100vw - 62px);
  height: calc(100vh - 256px);
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.fg};
  transition: background-color 0.5s;
  overflow-y: auto;
  margin-bottom: 100px;
`;

export const App = () => {
  return (
    <ConfiguredThemeProvider>
      <FullPageContainer>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route path="/elevator-pitch/:id" component={ElevatorPitch} />
            <Route
              path={`/blog/:id(${blogData.map((p) => p.id).join("|")})`}
              component={Blog}
            />
            <Route path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </FullPageContainer>
    </ConfiguredThemeProvider>
  );
};
