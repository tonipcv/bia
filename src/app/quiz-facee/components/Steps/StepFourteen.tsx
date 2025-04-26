"use client";

import React from "react";
import { useQuizContext } from "../Quiz/QuizProvider";

const ageRanges = [
  {
    id: "18_29",
    text: "18–29",
    description: "Início da idade adulta"
  },
  {
    id: "30_39",
    text: "30–39",
    description: "Idade adulta"
  },
  {
    id: "40_49",
    text: "40–49",
    description: "Meia idade"
  },
  {
    id: "50_59",
    text: "50–59",
    description: "Maturidade"
  },
  {
    id: "60_69",
    text: "60–69",
    description: "Terceira idade"
  },
  {
    id: "70_plus",
    text: "70+",
    description: "Idade sênior"
  }
];

export default function StepFourteen() {
  const { setCurrentStep } = useQuizContext();

  return (
    <div className="pb-24">
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-2xl font-semibold text-gray-900">
            What is your age?
          </h2>
          <p className="text-gray-600">
            Select your age range
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {ageRanges.map((range) => (
            <button
              key={range.id}
              onClick={() => setCurrentStep(15)}
              className="p-4 rounded-xl border-2 border-gray-200 hover:border-gray-400 transition-all duration-200 group text-left"
            >
              <div className="space-y-1">
                <p className="font-medium text-gray-900 text-lg">
                  {range.text}
                </p>
                <p className="text-sm text-gray-500 group-hover:text-gray-600">
                  {range.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="fixed bottom-4 left-0 w-full px-4">
        <button
          onClick={() => setCurrentStep(13)}
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