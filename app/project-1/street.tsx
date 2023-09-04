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
    vertical: "justify-between flex-col mx-auto p-[130px] bg-gray-700 z-10",
    horizontal:
      "justify-between w-[100%] items-center my-auto p-[130px]  absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] h-[10vh]  bg-gray-700",
  };

  const stateMAp: Record<StreetState, TrafficLightActive> = {
    stop: "red",
    ready: "yellow",
    go: "green",
  };
  return (
    <div className={`flex ${styleMap[orientation]} `}>
      <TrafficLight active={stateMAp[state]} />
      <TrafficLight active={stateMAp[state]} />
    </div>
  );
};

export default Street;
