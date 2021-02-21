import React from "react";
import styled from "styled-components";

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 32px;

  /* Bump text-size */
  font-size: 20px;
  line-height: 1.4;
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
