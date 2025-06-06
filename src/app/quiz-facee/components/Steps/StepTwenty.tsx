"use client";

import React from "react";
import { useQuizContext } from "../Quiz/QuizProvider";

const motivationOptions = [
  {
    id: "confidence",
    text: "I want to look younger and more confident",
    description: "Looking to improve my self-esteem"
  },
  {
    id: "less_makeup",
    text: "I want to use less makeup",
    description: "Desire naturally beautiful skin"
  },
  {
    id: "impress",
    text: "I want to impress",
    description: "Looking to make a good impression"
  },
  {
    id: "partner",
    text: "I'm afraid my partner might drift away",
    description: "Concerned about my relationship"
  },
  {
    id: "prevent",
    text: "I want to prevent aging",
    description: "Looking to maintain youthful skin"
  },
  {
    id: "rituals",
    text: "I want to create my own beauty rituals",
    description: "Desire to establish a personalized routine"
  }
];

export default function StepTwenty() {
  const { setCurrentStep } = useQuizContext();

  return (
    <div className="pb-24">
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-2xl font-semibold text-gray-900">
            What motivates you to maintain a Face Yoga and skincare routine?
          </h2>
          <p className="text-gray-600">
            Select your main motivation
          </p>
        </div>

        <div className="space-y-3">
          {motivationOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setCurrentStep(21)}
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
          onClick={() => setCurrentStep(19)}
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