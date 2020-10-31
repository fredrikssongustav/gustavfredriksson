import React from "react";
import styled from "styled-components";

const CenteredContainer = styled.div`
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Hello: React.FC = () => {
  return (
    <CenteredContainer>
      <div>My name is Gustav Fredriksson</div>
    </CenteredContainer>
  );
};
