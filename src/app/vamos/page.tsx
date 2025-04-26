"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [step, setStep] = useState(1);

  const weightOptions = [
    "0-10 lbs",
    "10-20 lbs",
    "20-40 lbs",
    "40-80 lbs",
    "80+ lbs"
  ];

  const goals = [
    "Improve how I look",
    "Become healthier",
    "Feel better",
    "Improved energy & mood"
  ];

  const knowledgeLevels = [
    { text: "Nothing at all", emoji: "🙄" },
    { text: "Basic understanding", emoji: "🙂" },
    { text: "I know a lot", emoji: "🤓" }
  ];

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <section className="space-y-6 w-full">
            <div className="flex items-center gap-2 mb-12 justify-center">
              <span className="text-4xl font-bold text-pink-500 tracking-tight font-poppins">BH</span>
              <span className="text-2xl text-gray-600 font-poppins font-light tracking-wide border-l border-gray-200 pl-2">Healthy</span>
            </div>
            <h1 className="text-3xl font-bold text-center text-gray-800">Weight Loss Plan</h1>
            <p className="text-xl text-center text-gray-700">Lose menopause weight and keep it off for good</p>
            <p className="text-lg text-gray-600 text-center mb-8">
              Discover how to lose weight in any menopause stage
            </p>
            <h2 className="text-xl font-semibold text-center mb-6 text-gray-800">
              How much weight would you like to lose?
            </h2>
            <div className="flex flex-col gap-4">
              {weightOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => setStep(2)}
                  className="w-full p-4 text-left rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-gray-700"
                >
                  {option}
                </button>
              ))}
            </div>
          </section>
        );

      case 2:
        return (
          <section className="space-y-6 w-full">
            <div className="flex items-center gap-2 mb-8 justify-center">
              <span className="text-4xl font-bold text-pink-500 tracking-tight font-poppins">BH</span>
              <span className="text-2xl text-gray-600 font-poppins font-light tracking-wide border-l border-gray-200 pl-2">Healthy</span>
            </div>
            <div className="text-center space-y-4 mb-8">
              <p className="text-2xl font-bold text-gray-800">500,000+</p>
              <p className="text-lg text-gray-600">women have already joined</p>
              <p className="text-lg font-medium text-gray-700">
                Designed for women's bodies' changing needs over 40
              </p>
            </div>
            <h2 className="text-xl font-semibold text-center text-gray-800">
              Why do you want to lose weight?
            </h2>
            <p className="text-center text-gray-600 text-sm">
              You can have multiple goals
            </p>
            <div className="flex flex-col gap-4">
              {goals.map((goal, index) => (
                <button
                  key={index}
                  className="w-full p-4 text-left rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-gray-700"
                >
                  {goal}
                </button>
              ))}
            </div>
            <button
              onClick={() => setStep(3)}
              className="w-full p-4 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors flex items-center justify-center gap-2 mt-8"
            >
              Continue
              <span className="text-lg">→</span>
            </button>
          </section>
        );

      case 3:
        return (
          <section className="space-y-6 w-full">
            <div className="flex items-center gap-2 mb-8 justify-center">
              <span className="text-4xl font-bold text-pink-500 tracking-tight font-poppins">BH</span>
              <span className="text-2xl text-gray-600 font-poppins font-light tracking-wide border-l border-gray-200 pl-2">Healthy</span>
            </div>
            <h2 className="text-xl font-semibold text-center text-gray-800">
              How much do you know about weight loss?
            </h2>
            <div className="flex flex-col gap-4">
              {knowledgeLevels.map((level, index) => (
                <button
                  key={index}
                  className="w-full p-4 text-left rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors flex items-center justify-between text-gray-700"
                >
                  <span>{level.text}</span>
                  <span className="text-2xl">{level.emoji}</span>
                </button>
              ))}
            </div>
            <button
              className="w-full p-4 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors flex items-center justify-center gap-2 mt-8"
            >
              Continue
              <span className="text-lg">→</span>
            </button>
          </section>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-12 row-start-2 items-center max-w-2xl w-full">
          {renderStep()}
        </main>
        <footer className="row-start-3 text-center text-sm text-gray-500 font-poppins">
          © 2024 BH Healthy. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
