import React from "react";
import styled from "styled-components";

const SwitchInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
`;

const SwitchLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 50px;
  height: 26px;
  border-radius: 100px;
  border: 2px solid ${(props) => props.theme.fg};
  position: relative;
  transition: border 0.5s;
`;

const SwitchButton = styled.span`
  position: absolute;
  border-radius: 45px;
  padding: 0 4px;
  line-height: 26px;

  transition: 2s;
  ${SwitchInput}:checked + ${SwitchLabel} & {
    right: 0;
  }
`;

type SwitchProps = {
  id: string;
  toggled: boolean;
  onChange: () => void;
};

export const Switch = ({ id, toggled, onChange }: SwitchProps) => {
  return (
    <>
      <SwitchInput
        className="switch-checkbox"
        id={id}
        type="checkbox"
        checked={toggled}
        onChange={onChange}
      />
      <SwitchLabel htmlFor={id}>
        <SwitchButton>{toggled ? "🌚" : "🌝"}</SwitchButton>
      </SwitchLabel>
    </>
  );
};
