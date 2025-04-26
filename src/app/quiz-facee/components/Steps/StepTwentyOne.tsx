"use client";

import React, { useState, useEffect } from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import Image from "next/image";

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
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-light text-gray-900">
              Creating a personalized plan for you
            </h2>
            <div className="w-full bg-neutral-100 rounded-full h-1">
              <div
                className="bg-black h-1 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-gray-500 font-light">{progress}%</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-24">
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-2xl font-semibold text-gray-900">
            Based on your answers, we've identified your main needs
          </h2>
        </div>

        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-6 border border-gray-100">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-neutral-50 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">✨</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Skin Rejuvenation</h3>
                  <p className="text-sm text-gray-500">Natural and effective results</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-neutral-50 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Targeted Exercises</h3>
                  <p className="text-sm text-gray-500">Personalized for your needs</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-neutral-50 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">⭐</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Proven Results</h3>
                  <p className="text-sm text-gray-500">Based on scientific studies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-4 left-0 w-full px-4">
        <button
          onClick={() => setCurrentStep(22)}
          className="w-full py-4 rounded-full font-light text-white bg-black hover:bg-gray-900 transition-all duration-300"
        >
          Continue
        </button>
      </div>
    </div>
  );
} 