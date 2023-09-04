"use client";

import Controls from "./components/controls";
import useTrafficSystemModel from "./model";
import Street from "./components/street";

import "./styles.css";

const Project1 = () => {
  const cycle = 10 * 1000;
  const half_cycle = 5 * 1000;

  const { state, onStart, start, onReset } = useTrafficSystemModel(
    cycle,
    half_cycle
  );

  return (
    <div>
      {/* street */}
      <div className="w-[100%] mx-auto flex h-[100vh] relative">
        <Street orientation="vertical" state={state.a} />

        <Street orientation="horizontal" state={state.b} />
        <Controls {...{ onStart, onReset, start }} />
      </div>
    </div>
  );
};

export default Project1;
