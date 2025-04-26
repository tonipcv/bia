"use client";

import React, { useState } from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import Image from "next/image";

interface TargetZone {
  id: string;
  label: string;
  selected: boolean;
}

const targetZones: TargetZone[] = [
  { id: "whole_body", label: "Whole body", selected: false },
  { id: "arms", label: "Arms", selected: false },
  { id: "stomach", label: "Stomach", selected: false },
  { id: "back", label: "Back", selected: false },
  { id: "glutes", label: "Glutes", selected: false },
  { id: "legs", label: "Legs", selected: false },
  { id: "hips", label: "Hips", selected: false },
];

export default function StepEight() {
  const { setCurrentStep } = useQuizContext();
  const [zones, setZones] = useState<TargetZone[]>(targetZones);

  const handleSelect = (id: string) => {
    setZones(prev => {
      const newZones = prev.map(zone => {
        if (zone.id === id) {
          return { ...zone, selected: !zone.selected };
        }
        // Se selecionou "whole body", desmarca todos os outros
        if (id === "whole_body" && zone.id !== "whole_body") {
          return { ...zone, selected: false };
        }
        // Se selecionou qualquer outro, desmarca "whole body"
        if (zone.id === "whole_body" && id !== "whole_body") {
          return { ...zone, selected: false };
        }
        return zone;
      });
      return newZones;
    });
  };

  const handleContinue = () => {
    setCurrentStep(9);
  };

  const hasSelectedZones = zones.some(zone => zone.selected);

  return (
    <div className="space-y-8 pb-24">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Select your target zones
        </h2>
      </div>

      <div className="grid gap-4">
        {zones.map((zone) => (
          <button
            key={zone.id}
            onClick={() => handleSelect(zone.id)}
            className={`w-full p-4 rounded-lg border-2 transition-all duration-200 ${
              zone.selected
                ? "border-black bg-black/5"
                : "border-gray-200 hover:border-black/50"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="flex-1 flex items-center">
                <span className={`text-lg ${zone.selected ? "text-black" : "text-gray-700"}`}>
                  {zone.label}
                </span>
              </div>
              <div
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  zone.selected
                    ? "border-black bg-black"
                    : "border-gray-300"
                }`}
              >
                {zone.selected && (
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>

      <button
        onClick={handleContinue}
        disabled={!hasSelectedZones}
        className={`fixed bottom-0 left-1/2 -translate-x-1/2 mb-4 py-2.5 w-72 rounded-full text-white text-base font-medium bg-black hover:bg-gray-800 transition-all duration-200 sm:py-3 sm:w-96 sm:text-lg ${
          !hasSelectedZones ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Continue
      </button>
    </div>
  );
} 