import React from "react";
import "./App.css";
import styled from "styled-components";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Hello } from "./components/Hello/Hello";

const FullPageContainer = styled.article`
  position: fixed;
  display: flex;
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <div className="App">
      <FullPageContainer>
        <BrowserRouter>
          <Switch>
            <Route path="/">
              <Hello />
            </Route>
          </Switch>
        </BrowserRouter>
      </FullPageContainer>
    </div>
  );
}

export default App;
