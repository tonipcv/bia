"use client";

import React from "react";
import { useQuizContext } from "../Quiz/QuizProvider";

const sleepOptions = [
  {
    id: "less_than_5",
    text: "Less than 5 hours",
    description: "I sleep very little during the night"
  },
  {
    id: "five_to_six",
    text: "5 to 6 hours",
    description: "I sleep slightly below recommended"
  },
  {
    id: "seven_to_eight",
    text: "7 to 8 hours",
    description: "I sleep the recommended amount"
  },
  {
    id: "more_than_eight",
    text: "More than 8 hours",
    description: "I sleep a lot during the night"
  }
];

export default function StepSixteen() {
  const { setCurrentStep } = useQuizContext();

  return (
    <div className="pb-24">
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-2xl font-semibold text-gray-900">
            How many hours do you sleep per night?
          </h2>
          <p className="text-gray-600">
            Select your average sleep duration
          </p>
        </div>

        <div className="space-y-3">
          {sleepOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setCurrentStep(17)}
              className="w-full p-5 rounded-xl border-2 border-gray-200 hover:border-gray-400 transition-all duration-200 group text-left"
            >
              <div className="space-y-1">
                <p className="font-medium text-gray-900 text-lg">
                  {option.text}
                </p>
                <p className="text-sm text-gray-500 group-hover:text-gray-600">
                  {option.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="fixed bottom-4 left-0 w-full px-4">
        <button
          onClick={() => setCurrentStep(15)}
          className="mx-auto text-gray-500 hover:text-gray-900 transition-colors text-sm flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
      </div>
    </div>
  );
} 