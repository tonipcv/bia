"use client";

import React, { useState } from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import { quizStyles } from "../../styles/theme";

const options = [
  {
    id: "satisfied",
    text: "Sim, quero manter",
    description: "Prevenir o envelhecimento",
    emoji: "✨"
  },
  {
    id: "somewhat",
    text: "Preciso de ajustes",
    description: "Melhorar alguns aspectos",
    emoji: "💫"
  },
  {
    id: "not_satisfied",
    text: "Não estou satisfeita",
    description: "Transformação completa",
    emoji: "🌱"
  }
];

export default function StepFour() {
  const { setCurrentStep } = useQuizContext();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (optionId: string) => {
    setSelectedOption(optionId);
    setTimeout(() => {
      setCurrentStep(5);
    }, 400);
  };

  return (
    <div className={quizStyles.container}>
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className={quizStyles.title}>
            Você está satisfeita com sua pele?
          </h2>
          <p className={quizStyles.subtitle}>
            Escolha a melhor opção
          </p>
        </div>

        <div className="space-y-3">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              className={`w-full p-4 rounded-xl border-2 transition-all duration-200 hover:shadow-md font-["Avenir"]
                ${selectedOption === option.id 
                  ? "border-[#35426A] bg-[#35426A] text-white transform scale-[1.02]" 
                  : "border-gray-200 hover:border-[#35426A]/30 bg-white"
                }
                ${selectedOption && selectedOption !== option.id ? "opacity-50" : ""}
              `}
            >
              <div className="flex items-center gap-3">
                <div className={`flex-shrink-0 p-2 rounded-lg transition-colors
                  ${selectedOption === option.id 
                    ? "bg-white/10" 
                    : "bg-gray-50"
                  }`}
                >
                  <span className="text-2xl">{option.emoji}</span>
                </div>
                <div className="text-left">
                  <p className={`font-medium text-base leading-snug
                    ${selectedOption === option.id 
                      ? "text-white" 
                      : "text-gray-900"
                    }`}
                  >
                    {option.text}
                  </p>
                  <p className={`text-sm
                    ${selectedOption === option.id 
                      ? "text-white/80" 
                      : "text-gray-500"
                    }`}
                  >
                    {option.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="fixed bottom-4 left-0 w-full px-4 flex justify-center">
        <button
          onClick={() => setCurrentStep(3)}
          className={`text-gray-500 hover:text-[#35426A] transition-colors text-sm flex items-center gap-2 font-["Avenir"]`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Voltar
        </button>
      </div>
    </div>
  );
} 