import React from "react";
import styled from "styled-components";
import { ApplesWayOfSayingHello } from "./atoms/ApplesWayOfSayingHello/ApplesWayOfSayingHello";
import { GifModal } from "./atoms/GifModal/GifModal";
import { ThisIsMe } from "./atoms/ThisIsMe/ThisIsMe";
import { YouFindMeHere } from "./atoms/YouFindMeHere/YouFindMeHere";

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 16px;

  /* Bump text-size */
  font-size: 20px;
  line-height: 1.4;
`;

const RowContainer = styled.div`
  flex-direction: row;
  max-width: 600px;
  text-align: justify;
`;

export const Hello: React.FC = () => {
  return (
    <CenteredContainer>
      <RowContainer>
        <div>
          <GifModal>
            <ApplesWayOfSayingHello />
          </GifModal>
          <ThisIsMe />
          <YouFindMeHere />
        </div>
      </RowContainer>
    </CenteredContainer>
  );
};
