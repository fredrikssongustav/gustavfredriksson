import React from "react";
import styled from "styled-components";
import {
  lightTheme,
  useConfiguredThemeContext,
} from "../context/ConfiguredThemeProvider/ConfiguredThemeProvider";
import { Switch } from "../atoms/Switch/Switch";
import { CleanA } from "../atoms/CleanA/CleanA";

const P = styled.p`
  background-color: #fcc0b8;
  color: ${lightTheme.fg};
  font-weight: 700;
  padding: 3px 4px;
  font-size: 1.25rem;
  line-height: 1;
  margin: 0;
  border: 1px solid ${(props) => props.theme.bg};
`;

export const Header = () => {
  const { toggle, toggleDarkMode } = useConfiguredThemeContext();

  return (
    <>
      <CleanA href="/">
        <div style={{ position: "fixed", right: "30px", top: "32px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <P>GUSTAV FREDRIKSSON</P>
          </div>
        </div>
      </CleanA>
      <div style={{ position: "fixed", left: "32px", top: "32px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Switch id="darkmode" onChange={toggleDarkMode} toggled={toggle} />
        </div>
      </div>
    </>
  );
};
