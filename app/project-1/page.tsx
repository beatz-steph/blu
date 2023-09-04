"use client";

import { useState, useEffect, useMemo } from "react";
import Street from "./street";
import { Step, StreetState } from "./types";

import "./styles.css";

const Project1 = () => {
  const cycle = 10 * 1000;
  const half_cycle = 5 * 1000;

  const [start, setStart] = useState<boolean>(false);
  const [state, setState] = useState<Record<"a" | "b", StreetState>>({
    a: "go",
    b: "stop",
  });

  const [currentStep, setCurrentStep] = useState<Step>({
    a: "go",
    b: "stop",
    duration: cycle,
    nextStep: 1,
  });

  const steps: Record<number, Step> = useMemo(
    () => ({
      0: {
        a: "go",
        b: "stop",
        duration: cycle,
        nextStep: 1,
      },

      1: {
        a: "ready",
        b: "ready",
        duration: half_cycle,
        nextStep: 2,
      },

      2: {
        a: "stop",
        b: "go",
        duration: cycle,
        nextStep: 3,
      },
      3: {
        a: "ready",
        b: "ready",
        duration: half_cycle,
        nextStep: 0,
      },
    }),
    [cycle, half_cycle]
  );

  useEffect(() => {
    if (!start) return;
    setState({ a: currentStep.a, b: currentStep.b });

    const action = setInterval(() => {
      setCurrentStep((prev) => steps[prev.nextStep]);
    }, currentStep.duration);

    return () => clearInterval(action);
  }, [currentStep.a, currentStep.b, currentStep.duration, steps, start]);

  return (
    <div>
      {/* street */}
      <div className="w-[100%] mx-auto flex h-[100vh] relative">
        <Street orientation="vertical" state={state.a} />

        <Street orientation="horizontal" state={state.b} />
        <button className="z-20" onClick={() => setStart(true)}>
          Start
        </button>
      </div>
    </div>
  );
};

export default Project1;
