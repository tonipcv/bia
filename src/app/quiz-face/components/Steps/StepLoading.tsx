"use client";

import React, { useState, useEffect } from "react";
import { useQuizContext } from "../Quiz/QuizProvider";

export default function StepLoading() {
  const { setCurrentStep } = useQuizContext();
  const [skinProgress, setSkinProgress] = useState(0);
  const [routineProgress, setRoutineProgress] = useState(0);
  const [medicalProgress, setMedicalProgress] = useState(0);
  const [showStudies, setShowStudies] = useState(false);

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
        if (prev >= 65) {
          clearInterval(routineInterval);
          return 65;
        }
        return prev + 1;
      });
    }, 70);

    // Simulate progress for medical conditions
    const medicalInterval = setInterval(() => {
      setMedicalProgress(prev => {
        if (prev >= 45) {
          clearInterval(medicalInterval);
          return 45;
        }
        return prev + 1;
      });
    }, 90);

    // Show studies after loading
    const showStudiesTimeout = setTimeout(() => {
      setShowStudies(true);
    }, 5000);

    // Redirect after showing studies
    const redirectTimeout = setTimeout(() => {
      setCurrentStep(33);
    }, 12000);

    return () => {
      clearInterval(skinInterval);
      clearInterval(routineInterval);
      clearInterval(medicalInterval);
      clearTimeout(showStudiesTimeout);
      clearTimeout(redirectTimeout);
    };
  }, [setCurrentStep]);

  if (showStudies) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-2xl w-full space-y-12 py-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Harvard aprova o nosso método baseado em estudo científico
            </h2>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex items-start gap-4">
                <img 
                  src="/harvard-logo.png" 
                  alt="Harvard Medical School" 
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Harvard Medical School
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Exercícios melhoram o tônus muscular facial e podem substituir o Botox fazendo do jeito certo
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex items-start gap-4">
                <img 
                  src="/northwestern-logo.png" 
                  alt="Northwestern University" 
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Northwestern University
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    28 semanas de Protocolo = aparência 3 anos mais jovem
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">
            Aguarde...
          </h2>
          <p className="text-lg text-gray-600">
            Estamos criando seu plano ideal.
          </p>
        </div>

        <div className="space-y-6 mt-8">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-medium">Condição da pele</span>
              <span className="text-gray-900 font-semibold">{skinProgress}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-black transition-all duration-300 rounded-full"
                style={{ width: `${skinProgress}%` }}
              />
            </div>
            {skinProgress >= 94 && (
              <span className="text-green-600 flex items-center gap-1 text-sm">
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Análise concluída
              </span>
            )}
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-medium">Rotina de cuidados</span>
              <span className="text-gray-900 font-semibold">{routineProgress}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-black transition-all duration-300 rounded-full"
                style={{ width: `${routineProgress}%` }}
              />
            </div>
            <span className="text-blue-600 flex items-center gap-1 text-sm">
              <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Em andamento
            </span>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-medium">Condições médicas</span>
              <span className="text-gray-900 font-semibold">{medicalProgress}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-black transition-all duration-300 rounded-full"
                style={{ width: `${medicalProgress}%` }}
              />
            </div>
            <span className="text-blue-600 flex items-center gap-1 text-sm">
              <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Em andamento
            </span>
          </div>
        </div>
      </div>
    </div>
  );
} 