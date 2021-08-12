import React from "react";
import { Page } from "../atoms/Page/Page";
import { useTrackPage } from "../atoms/useTrackPage/useTrackPage";
import { ApplesWayOfSayingHello } from "./atoms/ApplesWayOfSayingHello/ApplesWayOfSayingHello";
import { ThisIsMe } from "./atoms/ThisIsMe/ThisIsMe";
import { YouFindMeHere } from "./atoms/YouFindMeHere/YouFindMeHere";

export const Hello: React.FC = () => {
  useTrackPage();

  return (
    <Page>
      <div
        style={{
          maxWidth: "600px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ApplesWayOfSayingHello />
        <ThisIsMe />
        <YouFindMeHere />
      </div>
    </Page>
  );
};
