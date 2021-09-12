import styled from "styled-components";

export const CleanA = styled.a`
  color: #335cad;
  text-decoration: none;

  && {
    &:hover {
      color: #244079;
      text-decoration: none;
    }

    &:visited,
    &:active {
      text-decoration: none;
    }
  }
`;
