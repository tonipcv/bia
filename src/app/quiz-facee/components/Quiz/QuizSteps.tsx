"use client";

import React from "react";
import { useQuizContext } from "./QuizProvider";
import StepOne from "../Steps/StepOne";
import StepTwo from "../Steps/StepTwo";
import StepThree from "../Steps/StepThree";
import StepFour from "../Steps/StepFour";
import StepFive from "../Steps/StepFive";
import StepSix from "../Steps/StepSix";
import StepSeven from "../Steps/StepSeven";
import StepEight from "../Steps/StepEight";
import StepNine from "../Steps/StepNine";
import StepTen from "../Steps/StepTen";
import StepEleven from "../Steps/StepEleven";
import StepTwelve from "../Steps/StepTwelve";
import StepThirteen from "../Steps/StepThirteen";
import StepFourteen from "../Steps/StepFourteen";
import StepFifteen from "../Steps/StepFifteen";
import StepSixteen from "../Steps/StepSixteen";
import StepSeventeen from "../Steps/StepSeventeen";
import StepEighteen from "../Steps/StepEighteen";
import StepNineteen from "../Steps/StepNineteen";
import StepTwenty from "../Steps/StepTwenty";
import StepTwentyOne from "../Steps/StepTwentyOne";
import StepTwentyTwo from "../Steps/StepTwentyTwo";
import StepTwentyThree from "../Steps/StepTwentyThree";
import StepTwentyFour from "../Steps/StepTwentyFour";
import StepTwentyFive from "../Steps/StepTwentyFive";
import StepTwentySix from "../Steps/StepTwentySix";
import StepTwentySeven from "../Steps/StepTwentySeven";
import StepTwentyEight from "../Steps/StepTwentyEight";
import StepTwentyNine from "../Steps/StepTwentyNine";
import StepThirty from "../Steps/StepThirty";
import StepThirtyOne from "../Steps/StepThirtyOne";
import StepThirtyTwo from "../Steps/StepThirtyTwo";
import StepThirtyThree from "../Steps/StepThirtyThree";
import StepThirtyFour from "../Steps/StepThirtyFour";
import StepThirtyFive from "../Steps/StepThirtyFive";
import StepThirtySix from "../Steps/StepThirtySix";

const QuizSteps = () => {
  const { currentStep } = useQuizContext();

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepOne />;
      case 2:
        return <StepTwo />;
      case 3:
        return <StepThree />;
      case 4:
        return <StepFour />;
      case 5:
        return <StepFive />;
      case 6:
        return <StepSix />;
      case 7:
        return <StepSeven />;
      case 8:
        return <StepEight />;
      case 9:
        return <StepNine />;
      case 10:
        return <StepTen />;
      case 11:
        return <StepEleven />;
      case 12:
        return <StepTwelve />;
      case 13:
        return <StepThirteen />;
      case 14:
        return <StepFourteen />;
      case 15:
        return <StepFifteen />;
      case 16:
        return <StepSixteen />;
      case 17:
        return <StepSeventeen />;
      case 18:
        return <StepEighteen />;
      case 19:
        return <StepNineteen />;
      case 20:
        return <StepTwenty />;
      case 21:
        return <StepTwentyOne />;
      case 22:
        return <StepTwentyTwo />;
      case 23:
        return <StepTwentyThree />;
      case 24:
        return <StepTwentyFour />;
      case 25:
        return <StepTwentyFive />;
      case 26:
        return <StepTwentySix />;
      case 27:
        return <StepTwentySeven />;
      case 28:
        return <StepTwentyEight />;
      case 29:
        return <StepTwentyNine />;
      case 30:
        return <StepThirty />;
      case 31:
        return <StepThirtyOne />;
      case 32:
        return <StepThirtyTwo />;
      case 33:
        return <StepThirtyThree />;
      case 34:
        return <StepThirtyFour />;
      case 35:
        return <StepThirtyFive />;
      case 36:
        return <StepThirtySix />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {renderStep()}
    </div>
  );
};

export default QuizSteps; 