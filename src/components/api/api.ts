type ErrorResponse = { isOK: false; errorMessage: string };

type SuccessResponse<T> = { isOK: true; data: T };

type Response<T> = ErrorResponse | SuccessResponse<T>;

type ElevatorPitchRequest = {
  id: string;
};

export type ElevatorPitchResponse = {
  url: string;
  title: string;
  description: string;
};

const elevatorPitch = async ({
  id,
}: ElevatorPitchRequest): Promise<Response<ElevatorPitchResponse>> => {
  const response = await fetch(`/v1/elevator-pitch/${id}`).then((res) => {
    if (res.status === 200) {
      return res.json();
    }
    return undefined;
  });

  if (response) {
    return { isOK: true, data: response };
  }

  return {
    isOK: false,
    errorMessage: "Could not fetch elevator pitch",
  };
};

export const api = {
  elevatorPitch,
};
