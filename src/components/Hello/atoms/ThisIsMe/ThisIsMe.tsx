import React from "react";
import styled from "styled-components";

const StyledText = styled.div`
  /* Unvisited link  */
  a {
    color: #335cad;
  }

  a:visited {
    color: #335cad;
  }

  a:hover {
    color: #335cad;
  }

  a:active {
    color: #335cad;
  }
`;

export const ThisIsMe: React.FC = () => {
  return (
    <StyledText>
      <p>
        My name is Gustav Fredriksson and I am a engineer. I am currently
        working as a Software Engineer at <a href="https://tink.com/">Tink</a>,
        building infrastructure for financial services of the future.
      </p>
      <p>
        If you land on this page, you probably feel lost–despite the fact that I
        am not looking for a new opportunity–I will leverage this opportunity
        and market{" "}
        <a href="https://www.linkedin.com/in/gustav-fredriksson-98549313a">
          my resume
        </a>
        . Feeling friendly? Get in touch:
      </p>
    </StyledText>
  );
};
