import * as React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";

const TextBlock = styled.h1`
  background-color: #fcc0b8;

  /* Fix width to fit all hello phrases */
  width: 110px;

  /* We want pulsating hello's */
  animation: pulse 5s infinite;

  @keyframes pulse {
    /* 0s */
    0% {
      color: #000000ff;
    }

    /* 2.25s */
    45% {
      color: #00000000;
    }

    /* 2.75s */
    55% {
      color: #00000000;
    }

    /* 5s */
    100% {
      color: #000000ff;
    }
  }

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
