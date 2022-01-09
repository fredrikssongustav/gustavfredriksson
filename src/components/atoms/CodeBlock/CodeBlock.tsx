import React, { useState } from "react";
import styled from "styled-components";

const StyledPre = styled.pre`
  position: relative;
`;

const StyledCode = styled.code`
  margin: 0;
  display: block;
  padding: 5px;
`;

const Overlay = styled.div`
  overflow-x: auto;
  background-color: ${(props) => props.theme.fg}20;

  position: relative;
  & button {
    @media (min-device-width: 700px) {
      display: none;
    }

    @media (max-device-width: 700px) {
      display: block;
    }

    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.primary};
  }

  & button:disabled {
    display: none;
  }
`;

export const CodeBlock: React.FC = ({ children }) => {
  const [showOverlay, setShowOverlay] = useState<boolean>(true);

  return (
    <Overlay>
      <button
        type="button"
        onClick={() => setShowOverlay(false)}
        disabled={!showOverlay}
      >
        <h4>The code looks ugly on small screens</h4>
        <p>(tap this to see the code though)</p>
      </button>
      <StyledPre>
        asd
        <StyledCode>{children}</StyledCode>
      </StyledPre>
    </Overlay>
  );
};
