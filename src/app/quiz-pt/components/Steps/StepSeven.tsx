"use client";

import React from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import Image from "next/image";

interface TargetBodyType {
  id: string;
  label: string;
  image: string;
}

const targetBodyTypes: TargetBodyType[] = [
  { id: "curvy", label: "Curvy", image: "/P7-E1-curvy.avif" },
  { id: "regular", label: "Regular", image: "/P7-E2-regular.avif" },
  { id: "flat", label: "Flat", image: "/P7-E3-flat.avif" },
  { id: "fit", label: "Fit", image: "/P7-E4-fit.avif" },
  { id: "athletic", label: "Athletic", image: "/P7-E5-athletic.avif" },
];

export default function StepSeven() {
  const { setCurrentStep } = useQuizContext();

  const handleSelect = () => {
    setCurrentStep(8);
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          What is your target body type?
        </h2>
      </div>

      <div className="grid gap-4">
        {targetBodyTypes.map((type) => (
          <button
            key={type.id}
            onClick={handleSelect}
            className="w-full p-4 rounded-lg border-2 border-gray-200 hover:border-black/50 transition-all duration-200"
          >
            <div className="flex items-center gap-4">
              <div className="flex-1 flex items-center">
                <span className="text-lg text-gray-700">{type.label}</span>
              </div>
              <div className="relative w-16 h-16 sm:w-24 sm:h-24 flex-shrink-0">
                <Image
                  src={type.image}
                  alt={type.label}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
} 