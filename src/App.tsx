import React from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Hello } from "./components/Hello/Hello";
import { ElevatorPitch } from "./components/ElevatorPitch/ElevatorPitch";

const FullPageContainer = styled.article`
  position: fixed;
  display: flex;
  width: 100vw;
  height: 100vh;

  /* Unvisited link  */
  p > a,
  a:visited,
  a:hover,
  a:active {
    color: #335cad;
  }
`;

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
