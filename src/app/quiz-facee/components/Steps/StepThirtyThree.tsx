"use client";

import React, { useEffect } from "react";
import { useQuizContext } from "../Quiz/QuizProvider";

export default function StepThirtyThree() {
  const { setCurrentStep } = useQuizContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentStep(34);
    }, 4000); // 4 seconds

    return () => clearTimeout(timer);
  }, [setCurrentStep]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 text-center space-y-8">
        {/* Loading Spinner */}
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
        </div>

        {/* Loading Message */}
        <div className="space-y-4">
          <h2 className="text-3xl font-light text-gray-900">
            Seu perfil é ideal para o programa
          </h2>
          <p className="text-xl text-gray-600 font-light">
            Em poucas semanas você começará ver o resultado...
          </p>
        </div>
      </div>
    </div>
  );
} 