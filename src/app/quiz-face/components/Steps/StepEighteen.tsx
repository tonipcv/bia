"use client";

import React from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import { stepStyles } from "./styles";

const skinOptions = [
  {
    id: "normal",
    text: "Normal",
    description: "Pele equilibrada, nem muito seca nem muito oleosa"
  },
  {
    id: "dry",
    text: "Seca",
    description: "Pele que tende a descamar e sentir repuxada"
  },
  {
    id: "oily",
    text: "Oleosa",
    description: "Pele que produz excesso de oleosidade"
  },
  {
    id: "combination",
    text: "Mista",
    description: "Algumas áreas secas e outras oleosas"
  },
  {
    id: "unknown",
    text: "Não sei dizer",
    description: "Tenho dúvidas sobre meu tipo de pele"
  }
];

export default function StepEighteen() {
  const { setCurrentStep } = useQuizContext();

  return (
    <div className={stepStyles.container}>
      <div className={stepStyles.content}>
        <div className={stepStyles.section}>
          <div className={stepStyles.header}>
            <h2 className={stepStyles.title}>
              Como você descreveria sua pele?
            </h2>
            <p className={stepStyles.subtitle}>
              Selecione o tipo que melhor descreve sua pele
            </p>
          </div>

          <div className="space-y-3">
            {skinOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setCurrentStep(19)}
                className={`${stepStyles.button.base} w-full ${stepStyles.button.unselected}`}
              >
                <div className="space-y-1">
                  <p className={`font-medium text-gray-900 ${stepStyles.button.text}`}>
                    {option.text}
                  </p>
                  <p className={stepStyles.button.description}>
                    {option.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={stepStyles.bottomNav.container}>
        <div className={stepStyles.bottomNav.wrapper}>
          <button
            onClick={() => setCurrentStep(17)}
            className={stepStyles.bottomNav.back}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
} 