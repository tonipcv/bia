// /components/Quiz/Steps/Step2.tsx
"use client";

import React from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import { quizStyles } from "../../styles/theme";

const StepTwo: React.FC = () => {
  const { setCurrentStep } = useQuizContext();

  const options = [
    {
      text: "Não tenho certeza",
      emoji: "🤔",
      onClick: () => setCurrentStep(3)
    },
    {
      text: "Sei algumas coisas",
      emoji: "🧘‍♀️",
      onClick: () => setCurrentStep(3)
    },
    {
      text: "Sim, sei tudo sobre isso",
      emoji: "💆‍♀️",
      onClick: () => setCurrentStep(3)
    }
  ];

  return (
    <div className={quizStyles.container}>
      <div className="space-y-10">
        <div className="text-center">
          <h2 className={quizStyles.title}>
            Você já ouviu falar do Protocolo Coreano?
          </h2>
        </div>

        <div className="space-y-4 w-full max-w-md mx-auto">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={option.onClick}
              className={quizStyles.optionButton}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{option.emoji}</span>
                <span className="text-gray-800 font-medium font-['Avenir']">{option.text}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
