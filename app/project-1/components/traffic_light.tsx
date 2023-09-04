import { TrafficLightActive } from "../types";

const TrafficLight = ({ active = "red" }: { active?: TrafficLightActive }) => {
  return (
    <div className="trafficLight">
      <span className={`${active === "red" ? "bg-red-600" : ""}`}></span>
      <span className={`${active === "yellow" ? "bg-yellow-600" : ""}`}></span>
      <span className={`${active === "green" ? "bg-green-600" : ""}`}></span>
    </div>
  );
};

export default TrafficLight;
