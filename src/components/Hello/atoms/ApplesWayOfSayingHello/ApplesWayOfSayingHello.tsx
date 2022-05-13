import * as React from "react";
import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";

const pulse = (color: string) => keyframes`
    0% {
      color: ${color}ff;
    }

    45% {
      color: ${color}00;
    }

    55% {
      color: ${color}00;
    }

    100% {
      color: ${color}ff;
    }`;

const TextBlock = styled.h2`
  font-size: ${(props) => props.theme.sizes.monumental};
  text-align: left;

  /* We want pulsating hello's */
  animation: ${(props) => pulse(props.theme.fg)} 5s infinite;

  /* Delay for the first render to sync setTimeout */
  animation-delay: 2.75s;
`;

const helloInVariousLanguages = [
  "Hello",
  "Hej",
  "שלום",
  "Bonjour",
  "日",
  "Hallo",
];

export const CoolWayOfSayingHello: React.FC = () => {
  const [hello, setHello] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      setHello(hello + 1);
    }, 5000);
  }, [hello, setHello]);

  return (
    <TextBlock>
      {helloInVariousLanguages[hello % helloInVariousLanguages.length]}
    </TextBlock>
  );
};
