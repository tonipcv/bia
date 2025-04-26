"use client";

import React from "react";
import { useQuizContext } from "../Quiz/QuizProvider";

const dietOptions = [
  {
    id: "none",
    text: "Não sigo nenhuma",
    description: "Sem restrições específicas"
  },
  {
    id: "no_restrictions",
    text: "Sem restrições",
    description: "Como de tudo de forma equilibrada"
  },
  {
    id: "vegetarian",
    text: "Vegetariana",
    description: "Não consumo carnes"
  },
  {
    id: "no_meat",
    text: "Sem carne, peixe ou frango",
    description: "Dieta baseada em vegetais"
  },
  {
    id: "gluten_free",
    text: "Sem glúten",
    description: "Evito alimentos com glúten"
  },
  {
    id: "vegan",
    text: "Vegana",
    description: "Sem produtos de origem animal"
  }
];

export default function StepEleven() {
  const { setCurrentStep } = useQuizContext();

  return (
    <div className="pb-24">
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-2xl font-semibold text-gray-900">
            Do you follow any diet?
          </h2>
          <p className="text-gray-600">
            Select the type of diet you practice
          </p>
        </div>

        <div className="space-y-3">
          {dietOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setCurrentStep(12)}
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
          onClick={() => setCurrentStep(10)}
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