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

const TextBlock = styled.h1`
  border-bottom: 0.4rem solid ${(props) => props.theme.fg};
  font-size: 4rem;
  text-align: left;

  /* We want pulsating hello's */
  animation: ${(props) => pulse(props.theme.fg)} 5s infinite;

  /* Delay for the first render to sync setTimeout */
  animation-delay: 2.75s;
`;

const helloInVariousLanguages = [
  { word: "Hello", id: 0 },
  { word: "Hej", id: 1 },
  { word: "שלום", id: 2 },
  { word: "Bonjour", id: 3 },
  { word: "日", id: 4 },
  { word: "Hallo", id: 5 },
];

export const ApplesWayOfSayingHello: React.FC = () => {
  const [hello, setHello] = useState(helloInVariousLanguages[0]);

  useEffect(() => {
    setTimeout(() => {
      const nextIndex = hello.id === 4 ? 0 : hello.id + 1;
      setHello(helloInVariousLanguages[nextIndex]);
    }, 5000);
  }, [hello, setHello]);

  return <TextBlock> {hello.word}</TextBlock>;
};
