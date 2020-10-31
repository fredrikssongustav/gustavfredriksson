import React from "react";
import styled from "styled-components";
import { ApplesWayOfSayingHello } from "./atoms/ApplesWayOfSayingHello/ApplesWayOfSayingHello";
import { ThisIsMe } from "./atoms/ThisIsMe/ThisIsMe";

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
  max-width: 600px;
  text-align: left;
`;

export const Hello: React.FC = () => {
  return (
    <CenteredContainer>
      <RowContainer>
        <div>
          <ApplesWayOfSayingHello />
          <ThisIsMe />
        </div>
        <div />
      </RowContainer>
    </CenteredContainer>
  );
};
