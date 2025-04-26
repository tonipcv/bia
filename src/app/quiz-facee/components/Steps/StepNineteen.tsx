"use client";

import React, { useState } from "react";
import { useQuizContext } from "../Quiz/QuizProvider";

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
    <div className="pb-24">
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-2xl font-semibold text-gray-900">
            Você tem alguma dessas preocupações com a pele?
          </h2>
          <p className="text-gray-600">
            Selecione todas as opções que se aplicam
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {skinConcerns.map((concern) => (
            <button
              key={concern.id}
              onClick={() => toggleConcern(concern.id)}
              className={`p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                selectedConcerns.includes(concern.id)
                  ? "border-gray-900 bg-gray-50"
                  : "border-gray-200 hover:border-gray-400"
              }`}
            >
              <div className="space-y-1">
                <p className="font-medium text-gray-900 text-lg">
                  {concern.text}
                </p>
                <p className="text-sm text-gray-500">
                  {concern.description}
                </p>
              </div>
            </button>
          ))}
        </div>

        <div className="flex justify-center pt-4">
          <button
            onClick={() => setCurrentStep(20)}
            className={`px-8 py-3 rounded-full font-medium transition-all duration-200 ${
              selectedConcerns.length > 0
                ? "bg-gray-900 text-white hover:bg-gray-800"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
            disabled={selectedConcerns.length === 0}
          >
            Continuar
          </button>
        </div>
      </div>

      <div className="fixed bottom-4 left-0 w-full px-4">
        <button
          onClick={() => setCurrentStep(18)}
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