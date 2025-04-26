"use client";

import React, { useState, useEffect } from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import { quizStyles } from "../../styles/theme";

export default function StepThirtyTwo() {
  const { setCurrentStep } = useQuizContext();
  const [skinProgress, setSkinProgress] = useState(0);
  const [routineProgress, setRoutineProgress] = useState(0);
  const [medicalProgress, setMedicalProgress] = useState(0);

  useEffect(() => {
    // Simulate progress for skin condition
    const skinInterval = setInterval(() => {
      setSkinProgress(prev => {
        if (prev >= 94) {
          clearInterval(skinInterval);
          return 94;
        }
        return prev + 2;
      });
    }, 50);

    // Simulate progress for routine
    const routineInterval = setInterval(() => {
      setRoutineProgress(prev => {
        if (prev >= 66) {
          clearInterval(routineInterval);
          return 66;
        }
        return prev + 1;
      });
    }, 70);

    // Simulate progress for medical conditions
    const medicalInterval = setInterval(() => {
      setMedicalProgress(prev => {
        if (prev >= 51) {
          clearInterval(medicalInterval);
          return 51;
        }
        return prev + 1;
      });
    }, 90);

    // Redirect after all analyses are complete
    const redirectTimeout = setTimeout(() => {
      setCurrentStep(33);
    }, 5000);

    return () => {
      clearInterval(skinInterval);
      clearInterval(routineInterval);
      clearInterval(medicalInterval);
      clearTimeout(redirectTimeout);
    };
  }, [setCurrentStep]);

  return (
    <div className={quizStyles.container}>
      <div className="w-full max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className={quizStyles.title}>
            Aguarde...
          </h2>
          <p className={quizStyles.subtitle}>
            Estamos criando seu plano ideal.
          </p>
        </div>

        <div className="space-y-4">
          {/* Skin Condition Card */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-medium font-['Avenir']">Condição da pele</span>
                <span className="text-[#35426A] font-semibold font-['Avenir']">{skinProgress}%</span>
              </div>
              <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#35426A] transition-all duration-300 rounded-full"
                  style={{ width: `${skinProgress}%` }}
                />
              </div>
              {skinProgress >= 94 && (
                <span className="text-green-600 flex items-center gap-1.5 text-sm font-['Avenir']">
                  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Análise concluída
                </span>
              )}
            </div>
          </div>

          {/* Routine Card */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-medium font-['Avenir']">Rotina de cuidados</span>
                <span className="text-[#35426A] font-semibold font-['Avenir']">{routineProgress}%</span>
              </div>
              <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#35426A] transition-all duration-300 rounded-full"
                  style={{ width: `${routineProgress}%` }}
                />
              </div>
              <span className="text-blue-600 flex items-center gap-1.5 text-sm font-['Avenir']">
                <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Em andamento
              </span>
            </div>
          </div>

          {/* Medical Conditions Card */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-medium font-['Avenir']">Condições médicas</span>
                <span className="text-[#35426A] font-semibold font-['Avenir']">{medicalProgress}%</span>
              </div>
              <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#35426A] transition-all duration-300 rounded-full"
                  style={{ width: `${medicalProgress}%` }}
                />
              </div>
              <span className="text-blue-600 flex items-center gap-1.5 text-sm font-['Avenir']">
                <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Em andamento
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 