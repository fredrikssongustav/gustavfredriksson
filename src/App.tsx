import React from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ElevatorPitch } from "./components/ElevatorPitch/ElevatorPitch";
import { ConfiguredThemeProvider } from "./components/context/ConfiguredThemeProvider/ConfiguredThemeProvider";
import { Home } from "./components/pages/Home/Home";
import { Blog, blogData } from "./components/pages/Blog/Blog";
import { Header } from "./components/Header/Header";

const FullPageContainer = styled.div`
  position: relative;
  flex-direction: column;
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.fg};
  transition: background-color 0.5s;
  overflow-y: auto;
  padding: 100px 5%;
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
