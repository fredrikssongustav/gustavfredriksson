/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import styled from "styled-components";

export const Spinner = styled(({ ...props }) => {
  return (
    <span
      {...props}
      data-testid="spinner-overlay"
      role="img"
      aria-label="spinner"
    >
      🚀
    </span>
  );
})`
  font-size: 40px;
  animation: spin 1.5s infinite;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const SpinnerOverlay = styled(({ ...props }) => {
  return (
    <div {...props}>
      <Spinner />
    </div>
  );
})`
  /* Regardless of hierarchy, we want this to be loaded on top of all*/
  height: 100vh;
  width: 100vw;
  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;

  /* Center content */
  display: flex;
  align-items: center;
  justify-content: center;

  /* Make it look like an overlay */
  background-color: #fcc0b861;
`;
