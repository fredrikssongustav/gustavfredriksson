import React from "react";
import styled from "styled-components";

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 32px;
  background-color: #f5eeee;

  /* Bump text-size */
  font-size: 20px;
  line-height: 1.4;

  /* "Handle" iPhone navbar in bottom */
  @media only screen and (max-width: 600px) {
    align-items: unset;
  }
  overflow-y: auto;
`;

export const Header = () => (
  <div style={{ position: "fixed", right: "32px" }}>
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <p
        style={{
          backgroundColor: "#fcc0b8",
          fontWeight: 700,
          padding: "2px 4px",
          fontSize: "1.25rem",
          lineHeight: "1",
          margin: "0",
        }}
      >
        GUSTAV FREDRIKSSON
      </p>
    </div>
  </div>
);

export const Page: React.FC = ({ children }) => {
  return (
    <CenteredContainer>
      <Header />
      <>{children}</>
    </CenteredContainer>
  );
};
