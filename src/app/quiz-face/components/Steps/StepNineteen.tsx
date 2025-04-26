"use client";

import React, { useState } from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import { stepStyles } from "./styles";

const skinConcerns = [
  {
    id: "acne",
    text: "Acne e espinhas",
    description: "Problemas com cravos e espinhas"
  },
  {
    id: "redness",
    text: "Vermelhidão",
    description: "Áreas avermelhadas na pele"
  },
  {
    id: "dullness",
    text: "Opacidade",
    description: "Falta de luminosidade na pele"
  },
  {
    id: "texture",
    text: "Textura irregular",
    description: "Pele com textura desigual"
  },
  {
    id: "uneven_tone",
    text: "Tom desigual",
    description: "Variações no tom da pele"
  },
  {
    id: "pigmentation",
    text: "Manchas de pigmentação",
    description: "Manchas escuras ou claras"
  },
  {
    id: "none",
    text: "Nenhuma das anteriores",
    description: "Não tenho essas preocupações"
  }
];

export default function StepNineteen() {
  const { setCurrentStep } = useQuizContext();
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>([]);

  const toggleConcern = (id: string) => {
    if (id === "none") {
      // Se "Nenhuma das anteriores" for selecionada, limpa outras seleções
      setSelectedConcerns(["none"]);
    } else {
      setSelectedConcerns(prev => {
        // Remove "Nenhuma das anteriores" se estiver selecionada
        const filtered = prev.filter(item => item !== "none");
        
        if (prev.includes(id)) {
          return filtered.filter(concernId => concernId !== id);
        } else {
          return [...filtered, id];
        }
      });
    }
  };

  return (
    <div className={stepStyles.container}>
      <div className={stepStyles.content}>
        <div className={stepStyles.section}>
          <div className={stepStyles.header}>
            <h2 className={stepStyles.title}>
              Você tem alguma dessas preocupações com a pele?
            </h2>
            <p className={stepStyles.subtitle}>
              Selecione todas as opções que se aplicam
            </p>
          </div>

          <div className={stepStyles.grid}>
            {skinConcerns.map((concern) => (
              <button
                key={concern.id}
                onClick={() => toggleConcern(concern.id)}
                className={`${stepStyles.button.base} ${
                  selectedConcerns.includes(concern.id)
                    ? stepStyles.button.selected
                    : stepStyles.button.unselected
                }`}
              >
                <div className="space-y-1">
                  <p className={`font-medium text-gray-900 ${stepStyles.button.text}`}>
                    {concern.text}
                  </p>
                  <p className={stepStyles.button.description}>
                    {concern.description}
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
            onClick={() => setCurrentStep(20)}
            className={`${stepStyles.bottomNav.primary} ${
              selectedConcerns.length > 0
                ? stepStyles.bottomNav.primaryEnabled
                : stepStyles.bottomNav.primaryDisabled
            }`}
            disabled={selectedConcerns.length === 0}
          >
            Continuar
          </button>

          <button
            onClick={() => setCurrentStep(18)}
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