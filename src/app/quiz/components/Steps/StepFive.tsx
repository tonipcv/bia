"use client";

import React, { useState } from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import Image from "next/image";

interface BodyType {
  id: string;
  label: string;
  image: string;
}

const bodyTypes: BodyType[] = [
  { id: "regular", label: "Regular", image: "/P5-E1-regular.avif" },
  { id: "flabby", label: "Flabby", image: "/P5-E2-flabby.avif" },
  { id: "muffin_top", label: "Muffin top", image: "/P5-E3-muffin-top.avif" },
  { id: "overweight", label: "Overweight", image: "/P5-E4-overweight.avif" },
  { id: "obese", label: "Obese", image: "/P5-E5-obese.avif" },
];

export default function StepFive() {
  const { setCurrentStep } = useQuizContext();
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const handleSelect = (id: string) => {
    setSelectedType(id);
    setCurrentStep(6);
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          What is your current body type?
        </h2>
      </div>

      <div className="grid gap-4">
        {bodyTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => handleSelect(type.id)}
            className={`w-full p-4 rounded-lg border-2 transition-all duration-200 ${
              selectedType === type.id
                ? "border-black bg-black/5"
                : "border-gray-200 hover:border-black/50"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="flex-1 flex items-center">
                <span className={`text-lg ${selectedType === type.id ? "text-black" : "text-gray-700"}`}>
                  {type.label}
                </span>
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