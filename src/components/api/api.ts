const BASE_URL =
  process.env.REACT_APP_BASE_URL || "https://api.gustavfredriksson.com";

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

function createApiPath(path: string) {
  return `${BASE_URL}/v1/${path}`;
}

const elevatorPitch = async ({
  id,
}: ElevatorPitchRequest): Promise<Response<ElevatorPitchResponse>> => {
  const response = await fetch(createApiPath(`/elevator-pitch/${id}`)).then(
    (res) => {
      if (res.status === 200) {
        return res.json();
      }
      return undefined;
    }
  );

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
