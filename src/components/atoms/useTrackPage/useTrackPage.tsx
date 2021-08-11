import { useEffect } from "react";
import ReactGA from "react-ga";

export const initGA = (trackingID: string) => {
  ReactGA.initialize(trackingID);
};

initGA("G-6PE98CRQHF");

export const useTrackPage = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
};
