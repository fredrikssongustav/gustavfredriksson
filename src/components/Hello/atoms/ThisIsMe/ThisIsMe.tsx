import React from "react";
import { CleanA } from "../../../atoms/CleanA/CleanA";

export const ThisIsMe: React.FC = () => {
  return (
    <div style={{ textAlign: "justify" }}>
      <p>
        My name is Gustav and I bend software. Currently, I am on a mission to
        build the infrastructure for the financial services of our
        future–working as a Senior Software Engineer at{" "}
        <CleanA href="https://tink.com/">Tink</CleanA>.
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
