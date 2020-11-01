import React, { useEffect, useState } from "react";
import styled from "styled-components";
import bonjour from "./bonjour.gif";

const GifModalContainer = styled.div`
  :hover {
    cursor: pointer;
  }
`;

const BownjournoGif = styled.img.attrs({
  src: bonjour,
  alt: "brad-pitt-says-bonjour",
})`
  border: 5px solid #fcc0b8;
  max-width: 400px;
`;

const Time = styled.div`
  padding: 10px;
  background-color: #fcc0b8;

  /* Position text in the upper right corner */
  position: absolute;
  top: 0;
  right: 0;
`;

const HiddenAbsoluteContent = styled.div<{ show: boolean }>`
  position: absolute;
  visibility: ${(props) => (props.show ? "unset" : "hidden")};
`;

export const GifModal: React.FC = ({ children }) => {
  const [showGif, setShowGif] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    if (time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [time]);

  return (
    <div style={{ display: "flex" }}>
      <GifModalContainer
        onClick={() => {
          setShowGif(true);
          setTime(4);
          setTimeout(() => {
            setShowGif(false);
          }, 4000);
        }}
      >
        {children}
      </GifModalContainer>

      <HiddenAbsoluteContent show={showGif}>
        <Time>{time}</Time>
        <BownjournoGif />
      </HiddenAbsoluteContent>
    </div>
  );
};
