import React from "react";
import styled from "styled-components";

const SwitchInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
  position: absolute;
`;

const SwitchLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 55px;
  height: 24px;
  border-radius: 100px;
  border: 2px solid ${(props) => props.theme.fg};
  position: relative;
  transition: border, background-color 0.5s;
  background-color: ${(props) => props.theme.bg};
`;

const SwitchButton = styled.span`
  position: absolute;
  border-radius: 45px;
  line-height: 18px;
  font-size: 18px;
  transition: 2s;
  ${SwitchInput}:checked + ${SwitchLabel} & {
    right: 0;
    left: unset;
  }

  ${SwitchInput} + ${SwitchLabel} & {
    left: 1px;
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
