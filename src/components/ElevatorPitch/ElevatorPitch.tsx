import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import {
  api as importedApi,
  ElevatorPitchResponse as ElevatorPitchContent,
} from "../api/api";

type ElevatorPitchProps = RouteComponentProps<{ id: string }> & {
  api: typeof importedApi;
};

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
    return <>loading</>;
  }

  return <div>{elevatorPitchContent?.title}</div>;
};
