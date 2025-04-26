"use client";

import React, { useState, useEffect } from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import Image from "next/image";
import { stepStyles } from "./styles";

export default function StepTwentyOne() {
  const { setCurrentStep } = useQuizContext();
  const [progress, setProgress] = useState(0);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setShowResults(true), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  if (!showResults) {
    return (
      <div className={stepStyles.container}>
        <div className={stepStyles.content}>
          <div className="flex flex-col items-center justify-center h-full p-4">
            <div className="w-full max-w-md space-y-4">
              <div className="text-center space-y-3">
                <h2 className="text-lg font-light text-gray-900">
                  Criando um plano personalizado para você
                </h2>
                <div className="w-full bg-neutral-100 rounded-full h-1">
                  <div
                    className="bg-black h-1 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="text-gray-500 text-sm font-light">{progress}%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={stepStyles.container}>
      <div className={stepStyles.content}>
        <div className="flex flex-col items-center py-6 px-4">
          <div className="w-full max-w-md space-y-6">
            <div className="text-center space-y-3 mb-6">
              <h2 className="text-lg font-light text-gray-900">
                Plano de 28 dias para você está quase sendo finalizado...
              </h2>
              <p className="text-gray-600 text-sm font-light">
                Em 28 dias você pode ter uma transformação única na sua pele
              </p>
            </div>

            <div className="flex justify-center">
              <Image
                src="/dep3.jpg"
                alt="Transformação"
                width={400}
                height={300}
                className="rounded-2xl"
                priority
              />
            </div>

            <button
              onClick={() => setCurrentStep(22)}
              className="w-full py-4 bg-black text-white rounded-full font-light hover:bg-gray-900 transition-colors"
            >
              Continuar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 