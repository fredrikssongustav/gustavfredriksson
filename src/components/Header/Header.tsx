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
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        background: "inherit",
        zIndex: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "16px",
        }}
      >
        <CleanA href="/">
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "flex-end",
            }}
          >
            <P>GUSTAV FREDRIKSSON</P>
          </div>
        </CleanA>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Switch id="darkmode" onChange={toggleDarkMode} toggled={toggle} />
        </div>
      </div>
    </div>
  );
};
