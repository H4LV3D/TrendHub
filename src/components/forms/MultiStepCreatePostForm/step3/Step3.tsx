import React, { useState, useEffect } from "react";
import ButtonLoader from "@/components/shared/ButtonLoader/ButtonLoader";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import {
  decreaseAuthStep,
  increaseAuthStep,
} from "@/store/slices/authStep/AuthStepSlice";
import PrimaryButton from "@/components/shared/buttons/Primary";
import SecondaryButton from "@/components/shared/buttons/Secondary";

const Step3: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="flex items-center space-x-4 mt-16">
        <div className="sm:w-[250px]">
          <SecondaryButton
            text="Back"
            type="button"
            action={() => dispatch(decreaseAuthStep())}
          />
        </div>
        <div className="sm:w-[250px]">
          <PrimaryButton
            text="Next"
            type="button"
            loading={false}
            action={() => dispatch(increaseAuthStep())}
          />
        </div>
      </div>
    </>
  );
};

export default Step3;
