import React from "react";
import styled from "styled-components";
import { ApplesWayOfSayingHello } from "./atoms/ApplesWayOfSayingHello/ApplesWayOfSayingHello";

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  /* Bump text-size */
  font-size: 20px;
  line-height: 1.4;
`;

const RowContainer = styled.div`
  flex-direction: row;
`;

export const Hello: React.FC = () => {
  return (
    <CenteredContainer>
      <RowContainer>
        <div>
          <ApplesWayOfSayingHello />
          <div>My name is Gustav Fredriksson</div>
        </div>
        <div />
      </RowContainer>
    </CenteredContainer>
  );
};
