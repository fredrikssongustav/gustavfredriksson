import React from "react";
import styled from "styled-components";

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  overflow-y: scroll;
`;

const RowContainer = styled.div`
  flex-direction: row;
  max-width: 600px;
  text-align: justify;
`;

export const Page: React.FC = ({ children }) => {
  return (
    <CenteredContainer>
      <RowContainer>{children}</RowContainer>
    </CenteredContainer>
  );
};
