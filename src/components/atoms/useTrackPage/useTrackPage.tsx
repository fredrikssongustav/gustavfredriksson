import { useEffect } from "react";
import ReactGA from "react-ga";

export const initGA = (trackingID: string) => {
  ReactGA.initialize(trackingID);
};

initGA("G-55XNK8800V");

export const useTrackPage = () => {
  useEffect(() => {
    console.log("hey");
    ReactGA.pageview(window.location.pathname);
  }, []);
};
