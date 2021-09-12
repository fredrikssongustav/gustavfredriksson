import * as React from "react";
import { useTrackPage } from "../../atoms/useTrackPage/useTrackPage";
import { Hello } from "../../Hello/Hello";

export const Home = () => {
  useTrackPage();
  return (
    <>
      <Hello />
    </>
  );
};
