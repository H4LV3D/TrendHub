import React, { useEffect } from "react";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { resetAuthStep } from "@/store/slices/authStep/AuthStepSlice";
import { AnimatePresence } from "framer-motion";

const MultiStepSignupForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const step = useAppSelector((state) => state.authStep.step);

  useEffect(() => {
    return () => {
      dispatch(resetAuthStep());
    };
  }, [dispatch]);

  const showUI = () => {
    switch (step) {
      case 0:
        return <Step1 />;

      case 1:
        return <Step2 />;
    }
  };
  return (
    <div className="max-w-[30rem] mx-auto overflow-x-hidden">
      <AnimatePresence mode="wait">{showUI()}</AnimatePresence>
    </div>
  );
};

export default MultiStepSignupForm;
