import React from "react";
import styled from "styled-components";
import { ApplesWayOfSayingHello } from "./atoms/ApplesWayOfSayingHello/ApplesWayOfSayingHello";

const CenteredContainer = styled.div`
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Hello: React.FC = () => {
  return (
    <CenteredContainer>
      <div>
        <ApplesWayOfSayingHello />
        My name is Gustav Fredriksson
      </div>
    </CenteredContainer>
  );
};
