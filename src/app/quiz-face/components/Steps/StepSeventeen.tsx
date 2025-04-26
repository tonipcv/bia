"use client";

import React, { useState } from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import { stepStyles } from "./styles";

const areaOptions = [
  {
    id: "forehead",
    text: "Testa",
    description: "Região superior do rosto"
  },
  {
    id: "temples",
    text: "Têmporas",
    description: "Laterais da testa"
  },
  {
    id: "eyes",
    text: "Olhos",
    description: "Região ao redor dos olhos"
  },
  {
    id: "cheeks",
    text: "Bochechas",
    description: "Região central do rosto"
  },
  {
    id: "jaw",
    text: "Mandíbula",
    description: "Linha do maxilar"
  },
  {
    id: "mouth",
    text: "Boca",
    description: "Região dos lábios"
  },
  {
    id: "chin",
    text: "Queixo",
    description: "Parte inferior do rosto"
  },
  {
    id: "neck",
    text: "Pescoço",
    description: "Região do pescoço"
  },
  {
    id: "decolletage",
    text: "Colo",
    description: "Região superior do tronco"
  }
];

export default function StepSeventeen() {
  const { setCurrentStep } = useQuizContext();
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);

  const toggleArea = (id: string) => {
    setSelectedAreas(prev => {
      if (prev.includes(id)) {
        return prev.filter(areaId => areaId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  return (
    <div className={stepStyles.container}>
      <div className={stepStyles.content}>
        <div className={stepStyles.section}>
          <div className={stepStyles.header}>
            <h2 className={stepStyles.title}>
              Quais áreas você gostaria de melhorar?
            </h2>
            <p className={stepStyles.subtitle}>
              Selecione todas as áreas que você deseja focar
            </p>
          </div>

          <div className={stepStyles.grid}>
            {areaOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => toggleArea(option.id)}
                className={`${stepStyles.button.base} text-left ${
                  selectedAreas.includes(option.id)
                    ? stepStyles.button.selected
                    : stepStyles.button.unselected
                }`}
              >
                <div className="space-y-0.5">
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
            onClick={() => setCurrentStep(18)}
            className={`${stepStyles.bottomNav.primary} ${
              selectedAreas.length > 0
                ? stepStyles.bottomNav.primaryEnabled
                : stepStyles.bottomNav.primaryDisabled
            }`}
            disabled={selectedAreas.length === 0}
          >
            Continuar
          </button>

          <button
            onClick={() => setCurrentStep(16)}
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