export type TrafficLightActive = "red" | "green" | "yellow";

export type StreetState = "stop" | "ready" | "go";

export type Step = {
  a: StreetState;
  b: StreetState;
  duration: number;
  nextStep: number;
};
