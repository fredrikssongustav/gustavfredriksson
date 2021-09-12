import React from "react";
import styled from "styled-components";

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  /* Bump text-size */
  font-size: 20px;
  line-height: 1.4;

  /* "Handle" iPhone navbar in bottom */
  @media only screen and (max-width: 600px) {
    align-items: unset;
  }
  min-height: 100vh;
`;

type PageProps = {
  children: React.ReactNode;
};

export const Page = ({ children }: PageProps) => {
  return (
    <CenteredContainer>
      <>{children}</>
    </CenteredContainer>
  );
};
