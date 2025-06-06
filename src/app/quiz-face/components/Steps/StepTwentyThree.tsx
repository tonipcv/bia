"use client";

import React from "react";
import { useQuizContext } from "../Quiz/QuizProvider";

const sleepOptions = [
  {
    id: "less_than_5",
    text: "Menos de 5 horas",
    description: "Durmo muito pouco durante a noite"
  },
  {
    id: "five_to_six",
    text: "5 a 6 horas",
    description: "Durmo um pouco abaixo do recomendado"
  },
  {
    id: "seven_to_eight",
    text: "7 a 8 horas",
    description: "Durmo o tempo recomendado"
  },
  {
    id: "more_than_eight",
    text: "Mais de 8 horas",
    description: "Durmo bastante durante a noite"
  }
];

export default function StepTwentyThree() {
  const { setCurrentStep } = useQuizContext();

  return (
    <div className="pb-24">
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-2xl font-semibold text-gray-900">
            Quantas horas você dorme por noite?
          </h2>
          <p className="text-gray-600">
            Considere seu tempo médio de sono noturno
          </p>
        </div>

        <div className="space-y-3">
          {sleepOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setCurrentStep(27)}
              className="w-full p-5 rounded-xl border-2 border-gray-200 hover:border-gray-400 transition-all duration-200 group text-left"
            >
              <div className="space-y-1">
                <p className="font-medium text-gray-900 text-lg">
                  {option.text}
                </p>
                <p className="text-sm text-gray-500 group-hover:text-gray-600">
                  {option.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="fixed bottom-4 left-0 w-full px-4">
        <button
          onClick={() => setCurrentStep(16)}
          className="mx-auto text-gray-500 hover:text-gray-900 transition-colors text-sm flex items-center gap-2"
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