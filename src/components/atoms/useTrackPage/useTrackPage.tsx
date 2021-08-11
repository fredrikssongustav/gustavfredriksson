import { useEffect } from "react";
import ReactGA from "react-ga";

export const useTrackPage = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
};
