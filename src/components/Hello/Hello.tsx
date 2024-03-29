import React from "react";
import { Page } from "../atoms/Page/Page";
import { CoolWayOfSayingHello } from "./atoms/ApplesWayOfSayingHello/ApplesWayOfSayingHello";
import { ThisIsMe } from "./atoms/ThisIsMe/ThisIsMe";
import { YouFindMeHere } from "./atoms/YouFindMeHere/YouFindMeHere";

export const Hello: React.FC = () => {
  return (
    <Page>
      <div
        style={{
          maxWidth: "600px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CoolWayOfSayingHello />
        <ThisIsMe />
        <YouFindMeHere />
      </div>
    </Page>
  );
};
