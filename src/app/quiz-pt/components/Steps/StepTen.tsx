"use client";

import React, { useState, useEffect } from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import Image from "next/image";

interface MedicalCondition {
  id: string;
  label: string;
  image: string;
  selected: boolean;
  disabled: boolean;
}

const medicalConditions: MedicalCondition[] = [
  { id: "sensitive_back", label: "Sensitive back", image: "/P10-E1-sensitive-back.avif", selected: false, disabled: false },
  { id: "sensitive_knees", label: "Sensitive knees", image: "/P10-E2-sensitive-knees.avif", selected: false, disabled: false },
  { id: "hip_surgery", label: "Hip surgery", image: "/P10-E3-hip-surgery.avif", selected: false, disabled: false },
  { id: "other", label: "Other", image: "/P10-E4-other-medical-issues.avif", selected: false, disabled: false },
  { id: "none", label: "None of the above", image: "/P10-E5-none-of-the-above.avif", selected: false, disabled: false },
];

export default function StepTen() {
  const { setCurrentStep, currentStep, answers } = useQuizContext();
  const [conditions, setConditions] = useState<MedicalCondition[]>(medicalConditions);

  useEffect(() => {
    // Recupera a resposta salva quando o componente é montado
    if (answers && answers[10]) {
      const savedAnswers = answers[10] as string[];
      setConditions(prev => prev.map(condition => ({
        ...condition,
        selected: savedAnswers.includes(condition.id),
        disabled: savedAnswers.includes("none") && condition.id !== "none"
      })));
    }
  }, [answers]);

  const handleSelect = (id: string) => {
    setConditions(prev => {
      const newConditions = prev.map(condition => {
        if (condition.id === id) {
          // Se selecionou "none", desabilita todos os outros
          if (id === "none") {
            return {
              ...condition,
              selected: !condition.selected,
              disabled: false
            };
          }
          // Se selecionou qualquer outro, desabilita "none"
          if (condition.id === "none") {
            return {
              ...condition,
              selected: false,
              disabled: true
            };
          }
          return {
            ...condition,
            selected: !condition.selected,
            disabled: prev.find(c => c.id === "none")?.selected || false
          };
        }
        return condition;
      });
      return newConditions;
    });
  };

  const handleContinue = () => {
    setCurrentStep(11);
  };

  const hasSelectedConditions = conditions.some(condition => condition.selected);

  return (
    <div className="space-y-8 pb-24">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Are you experiencing any of the following medical conditions?
        </h2>
      </div>

      <div className="grid gap-4">
        {conditions.map((condition) => (
          <button
            key={condition.id}
            onClick={() => handleSelect(condition.id)}
            disabled={condition.disabled}
            className={`w-full p-4 rounded-lg border-2 transition-all duration-200 ${
              condition.selected
                ? "border-black bg-black/5"
                : "border-gray-200 hover:border-black/50"
            } ${condition.disabled ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={condition.image}
                  alt={condition.label}
                  fill
                  className="object-cover"
                />
              </div>
              <span className={`text-lg ${condition.selected ? "text-black" : "text-gray-700"}`}>
                {condition.label}
              </span>
            </div>
          </button>
        ))}
      </div>

      <button
        onClick={handleContinue}
        disabled={!hasSelectedConditions}
        className={`fixed bottom-0 left-1/2 -translate-x-1/2 mb-4 py-2.5 w-72 rounded-full text-white text-base font-medium bg-black hover:bg-gray-800 transition-all duration-200 sm:py-3 sm:w-96 sm:text-lg ${
          !hasSelectedConditions ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Continue
      </button>
    </div>
  );
} 