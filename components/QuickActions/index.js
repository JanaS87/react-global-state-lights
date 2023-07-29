import styled from "styled-components";
import Button from "../Button";
import React from "react";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({ handleAllOn, handleAllOff, lights }) {
  const allLightsOn = lights.every((light) => light.isOn);
  const allLightsOff = lights.every((light) => !light.isOn);
  return (
    <StyledQuickActions>
      <Button type="button" onClick={handleAllOff} disabled={allLightsOff}>
        Turn all lights off
      </Button>
      <Button type="button" onClick={handleAllOn} disabled={allLightsOn}>
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
