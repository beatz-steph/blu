import React from "react";
import TrafficLight from "./traffic_light";
import { StreetState, TrafficLightActive } from "./types";

const Street = ({
  orientation = "horizontal",
  state = "stop",
}: {
  orientation?: "horizontal" | "vertical";
  state?: StreetState;
}) => {
  const styleMap = {
    vertical: "justify-between flex-col mx-auto p-[130px]",
    horizontal:
      "justify-between w-[100%] items-center mx-auto p-[130px] z-10 absolute h-[100vh]",
  };

  const stateMAp: Record<StreetState, TrafficLightActive> = {
    stop: "red",
    ready: "yellow",
    go: "green",
  };
  return (
    <div className={`flex ${styleMap[orientation]}`}>
      <TrafficLight active={stateMAp[state]} />
      <TrafficLight active={stateMAp[state]} />
    </div>
  );
};

export default Street;
