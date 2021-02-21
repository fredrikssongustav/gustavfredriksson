import React from "react";
import { Page } from "../atoms/Page/Page";
import { ApplesWayOfSayingHello } from "./atoms/ApplesWayOfSayingHello/ApplesWayOfSayingHello";
import { GifModal } from "./atoms/GifModal/GifModal";
import { ThisIsMe } from "./atoms/ThisIsMe/ThisIsMe";
import { YouFindMeHere } from "./atoms/YouFindMeHere/YouFindMeHere";

export const Hello: React.FC = () => {
  return (
    <Page>
      <div>
        <GifModal>
          <ApplesWayOfSayingHello />
        </GifModal>
        <ThisIsMe />
        <YouFindMeHere />
      </div>
    </Page>
  );
};
