import * as React from "react";
import { RouteComponentProps } from "react-router-dom";

type ElevatorPitchProps = RouteComponentProps<{ id: string }>;

export const ElevatorPitch: React.FC<ElevatorPitchProps> = ({
  match: {
    params: { id },
  },
}: ElevatorPitchProps) => {
  return <div>{id}</div>;
};
