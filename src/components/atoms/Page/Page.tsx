import React from "react";
import styled from "styled-components";
import {
  lightTheme,
  useConfiguredThemeContext,
} from "../../context/ConfiguredThemeProvider/ConfiguredThemeProvider";
import { Switch } from "../Switch/Switch";

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 32px;

  /* Bump text-size */
  font-size: 20px;
  line-height: 1.4;

  /* "Handle" iPhone navbar in bottom */
  @media only screen and (max-width: 600px) {
    align-items: unset;
  }
  overflow-y: auto;
`;

const P = styled.p`
  background-color: #fcc0b8;
  color: ${lightTheme.fg};
  font-weight: 700;
  padding: 2px 4px;
  font-size: 1.25rem;
  line-height: 1;
  margin: 0;
`;

export const Header = () => {
  const { toggle, toggleDarkMode } = useConfiguredThemeContext();

  return (
    <>
      <div style={{ position: "fixed", right: "32px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <P>GUSTAV FREDRIKSSON</P>
        </div>
      </div>
      <div style={{ position: "fixed", left: "32px" }}>
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

export const Page: React.FC = ({ children }) => {
  return (
    <CenteredContainer>
      <Header />
      <>{children}</>
    </CenteredContainer>
  );
};
