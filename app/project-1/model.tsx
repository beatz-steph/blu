"use client";
import { useState, useEffect, useMemo } from "react";
import { Step, StreetState } from "./types";

const useTrafficSystemModel = (cycle: number, half_cycle: number) => {
  const [start, setStart] = useState<boolean>(false);

  const initialState: Record<"a" | "b", StreetState> = {
    a: "go",
    b: "stop",
  };
  const [state, setState] = useState<Record<"a" | "b", StreetState>>({
    ...initialState,
  });

  const initialCurrentStep: Step = {
    a: "go",
    b: "stop",
    duration: cycle,
    nextStep: 1,
  };

  const [currentStep, setCurrentStep] = useState<Step>({
    ...initialCurrentStep,
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

  const onStart = () => setStart(true);

  const onReset = () => {
    setStart(false);
    setCurrentStep({
      ...initialCurrentStep,
    });
    setState({ ...initialState });
  };

  useEffect(() => {
    if (!start) return;
    setState({ a: currentStep.a, b: currentStep.b });

    const action = setInterval(() => {
      setCurrentStep((prev) => steps[prev.nextStep]);
    }, currentStep.duration);

    return () => clearInterval(action);
  }, [currentStep.a, currentStep.b, currentStep.duration, steps, start]);

  return { state, start, onStart, onReset };
};

export default useTrafficSystemModel;
