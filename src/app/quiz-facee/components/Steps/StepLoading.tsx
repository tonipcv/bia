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
              Harvard approves our method based on scientific study
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
                    Exercises improve facial muscle tone and can replace Botox when done correctly
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
                    28 weeks of Protocol = 3 years younger appearance
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
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-light text-gray-900">
            Analyzing your answers...
          </h2>
          <p className="text-gray-500 font-light">
            Please wait while we process your information
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 font-light">Skin condition analysis</span>
              <span className="text-gray-900 font-medium">{skinProgress}%</span>
            </div>
            <div className="w-full bg-neutral-100 rounded-full h-1">
              <div
                className="bg-black h-1 rounded-full transition-all duration-300"
                style={{ width: `${skinProgress}%` }}
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 font-light">Routine customization</span>
              <span className="text-gray-900 font-medium">{routineProgress}%</span>
            </div>
            <div className="w-full bg-neutral-100 rounded-full h-1">
              <div
                className="bg-black h-1 rounded-full transition-all duration-300"
                style={{ width: `${routineProgress}%` }}
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 font-light">Medical recommendations</span>
              <span className="text-gray-900 font-medium">{medicalProgress}%</span>
            </div>
            <div className="w-full bg-neutral-100 rounded-full h-1">
              <div
                className="bg-black h-1 rounded-full transition-all duration-300"
                style={{ width: `${medicalProgress}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 