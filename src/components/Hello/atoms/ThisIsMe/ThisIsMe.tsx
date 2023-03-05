import React from "react";
import { CleanA } from "../../../atoms/CleanA/CleanA";

export const ThisIsMe: React.FC = () => {
  return (
    <div style={{ textAlign: "justify" }}>
      <p>
        My name is Gustav and I work with software. Currently, I am on the
        mission to build the live streaming technology of our future–working as
        an SDE at{" "}
        <CleanA href="https://www.primevideo.com/">Prime Video/Amazon</CleanA>.
      </p>
      <p>
        I am not looking for a new opportunity but will regardless leverage this
        opportunity and promote{" "}
        <CleanA href="https://www.linkedin.com/in/gustav-fredriksson-98549313a">
          my resume
        </CleanA>
        . Feeling friendly? Get in touch:
      </p>
    </div>
  );
};
