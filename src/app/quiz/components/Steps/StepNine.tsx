"use client";

import React, { useState, useEffect } from "react";
import { useQuizContext } from "../Quiz/QuizProvider";

interface ActivityLevel {
  id: string;
  label: string;
  emoji: string;
  selected: boolean;
}

const activityLevels: ActivityLevel[] = [
  { id: "not_at_all", label: "Not at all", emoji: "❌", selected: false },
  { id: "just_walking", label: "Just walking", emoji: "🚶🏻‍♀️", selected: false },
  { id: "one_session", label: "1 exercise session / week", emoji: "👍🏼", selected: false },
  { id: "three_four_sessions", label: "3-4 exercise sessions / week", emoji: "💪🏼", selected: false },
  { id: "five_sessions", label: "5 exercise sessions / week", emoji: "🚀", selected: false },
];

export default function StepNine() {
  const { setCurrentStep, currentStep, answers } = useQuizContext();
  const [levels, setLevels] = useState<ActivityLevel[]>(activityLevels);

  useEffect(() => {
    // Recupera a resposta salva quando o componente é montado
    if (answers && answers[9]) {
      const savedAnswer = answers[9];
      setLevels(prev => prev.map(level => ({
        ...level,
        selected: level.id === savedAnswer
      })));
    }
  }, [answers]);

  const handleSelect = (id: string) => {
    setLevels(prev => prev.map(level => ({
      ...level,
      selected: level.id === id
    })));
    setCurrentStep(10);
  };

  return (
    <div className="space-y-8 pb-24">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          What's your current activity level?
        </h2>
      </div>

      <div className="grid gap-4">
        {levels.map((level) => (
          <button
            key={level.id}
            onClick={() => handleSelect(level.id)}
            className={`w-full p-4 rounded-lg border-2 transition-all duration-200 ${
              level.selected
                ? "border-black bg-black/5"
                : "border-gray-200 hover:border-black/50"
            }`}
          >
            <div className="flex items-center gap-4">
              <span className="text-2xl">{level.emoji}</span>
              <span className={`text-lg ${level.selected ? "text-black" : "text-gray-700"}`}>
                {level.label}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
} 