import React from "react";
import { render, waitFor } from "@testing-library/react";
import { ElevatorPitch } from "./ElevatorPitch";

describe("ElevatorPitch", () => {
  it("should show loading state", () => {
    const props = {
      match: { params: { id: "i-am-id" } },
    } as any;
    const { getByText } = render(<ElevatorPitch {...props} />);

    expect(getByText("spinner-overlay")).toBeDefined();
  });

  it("should fetch data", async () => {
    const props = {
      match: { params: { id: "i-am-id" } },
      api: {
        elevatorPitch: jest.fn(() => ({
          isOK: "false",
        })),
      },
    } as any;
    render(<ElevatorPitch {...props} />);

    await waitFor(() => {
      expect(props.api.elevatorPitch).toBeCalledTimes(1);
      expect(props.api.elevatorPitch).toBeCalledWith({ id: "i-am-id" });
    });
  });

  it("should handle success state", async () => {
    const props = {
      match: { params: { id: "i-am-id" } },
      api: {
        elevatorPitch: jest.fn(() => ({
          isOK: "true",
          data: {
            title: "I am the title of the pitch",
          },
        })),
      },
    } as any;
    const { getByText } = render(<ElevatorPitch {...props} />);

    await waitFor(() => {
      expect(getByText("I am the title of the pitch")).toBeDefined();
    });
  });
});
