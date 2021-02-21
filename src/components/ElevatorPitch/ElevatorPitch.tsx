import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import {
  api as importedApi,
  ElevatorPitchResponse as ElevatorPitchContent,
} from "../api/api";
import { Page } from "../atoms/Page/Page";
import { SpinnerOverlay } from "../atoms/Spinner/Spinner";

type ElevatorPitchProps = RouteComponentProps<{ id: string }> & {
  api: typeof importedApi;
};

const StyledIframe = styled.iframe.attrs({
  title: "my-pitch",
})`
  width: 600px;
  height: 320px;
  border: 4px solid #fcc0b8;

  @media only screen and (max-width: 600px) {
    width: 250px;
    height: 140px;
  }
`;

export const ElevatorPitch: React.FC<ElevatorPitchProps> = ({
  match: {
    params: { id },
  },
  api = importedApi,
}: ElevatorPitchProps) => {
  const [elevatorPitchContent, setElevatorPitchContent] = useState<
    ElevatorPitchContent | undefined
  >(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.elevatorPitch({ id });

      if (response.isOK) {
        setElevatorPitchContent(response.data);
      }
    };

    fetchData();
  }, [api, id]);

  if (!elevatorPitchContent) {
    return <SpinnerOverlay />;
  }

  const { title, url, description } = elevatorPitchContent;

  return (
    <Page>
      <div>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: description }} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <StyledIframe src={url} allowFullScreen />
        </div>
      </div>
    </Page>
  );
};
