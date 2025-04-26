"use client";

import React, { useState } from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import { ArrowRight } from "lucide-react";

type Unit = 'imperial' | 'metric';

export default function StepTwentyFour() {
  const { setCurrentStep, currentStep } = useQuizContext();
  const [unit, setUnit] = useState<Unit>('imperial');
  const [heightFt, setHeightFt] = useState('');
  const [heightIn, setHeightIn] = useState('');
  const [heightCm, setHeightCm] = useState('');
  const [heightError, setHeightError] = useState(false);
  const [isFtFocused, setIsFtFocused] = useState(false);
  const [isInFocused, setIsInFocused] = useState(false);
  const [isCmFocused, setIsCmFocused] = useState(false);

  const handleUnitChange = (newUnit: Unit) => {
    if (newUnit === unit) return;

    if (newUnit === 'metric' && heightFt && heightIn) {
      setHeightCm(convertImperialToMetric(heightFt, heightIn));
    } else if (newUnit === 'imperial' && heightCm) {
      const { ft, inches } = convertMetricToImperial(heightCm);
      setHeightFt(ft);
      setHeightIn(inches);
    }

    setUnit(newUnit);
  };

  const convertImperialToMetric = (ft: string, inches: string) => {
    const totalInches = (parseInt(ft) * 12) + parseInt(inches);
    return Math.round(totalInches * 2.54).toString();
  };

  const convertMetricToImperial = (cm: string) => {
    const totalInches = Math.round(parseInt(cm) / 2.54);
    const ft = Math.floor(totalInches / 12);
    const inches = totalInches % 12;
    return { ft: ft.toString(), inches: inches.toString() };
  };

  const validateHeight = () => {
    if (unit === 'imperial') {
      const ft = parseInt(heightFt);
      const inches = parseInt(heightIn);
      return ft >= 4 && ft <= 7 && inches >= 0 && inches <= 11;
    } else {
      const cm = parseInt(heightCm);
      return cm >= 120 && cm <= 220;
    }
  };

  const isValid = unit === 'imperial' ? (heightFt && heightIn) : heightCm;
  const showError = isValid && !validateHeight();

  return (
    <div className="space-y-10">
      {/* Question */}
      <div className="text-center">
        <h1 className="text-black text-[32px] font-medium tracking-[-0.03em]">
          What is your height?
        </h1>
      </div>

      {/* Description */}
      <div className="text-center">
        <p className="text-gray-600 text-sm tracking-[-0.03em] leading-relaxed">
          This information helps us in metabolic calculations
          <br />
          and to personalize your plan to get your best body!
        </p>
      </div>

      {/* Unit Toggle */}
      <div className="flex rounded-lg overflow-hidden border border-gray-200">
        <button
          onClick={() => handleUnitChange('imperial')}
          className={`flex-1 h-14 font-medium text-lg transition-colors
            ${unit === 'imperial' 
              ? 'bg-black text-white' 
              : 'bg-gray-50 text-gray-600 hover:bg-gray-100'}`}
        >
          Imperial
        </button>
        <button
          onClick={() => handleUnitChange('metric')}
          className={`flex-1 h-14 font-medium text-lg transition-colors
            ${unit === 'metric' 
              ? 'bg-black text-white' 
              : 'bg-gray-50 text-gray-600 hover:bg-gray-100'}`}
        >
          Metric
        </button>
      </div>

      {/* Height Input */}
      {unit === 'imperial' ? (
        <div className="flex gap-3">
          <div className="flex-1">
            <div className="flex items-center h-16 px-6 rounded-lg border border-gray-200 bg-white focus-within:border-black transition-colors">
              <span className="text-gray-300 mr-4">Height</span>
              <input
                type="number"
                value={heightFt}
                onChange={(e) => setHeightFt(e.target.value)}
                onFocus={() => setIsFtFocused(true)}
                onBlur={() => setIsFtFocused(false)}
                className="flex-1 bg-transparent outline-none text-black text-lg"
                placeholder=""
                min="0"
                max="8"
              />
              <span className={`ml-4 ${isFtFocused ? 'text-gray-600' : 'text-gray-200'}`}>
                ft
              </span>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center h-16 px-6 rounded-lg border border-gray-200 bg-white focus-within:border-black transition-colors">
              <input
                type="number"
                value={heightIn}
                onChange={(e) => setHeightIn(e.target.value)}
                onFocus={() => setIsInFocused(true)}
                onBlur={() => setIsInFocused(false)}
                className="flex-1 bg-transparent outline-none text-black text-lg"
                placeholder=""
                min="0"
                max="11"
              />
              <span className={`ml-4 ${isInFocused ? 'text-gray-600' : 'text-gray-200'}`}>
                in
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center h-16 px-6 rounded-lg border border-gray-200 bg-white focus-within:border-black transition-colors">
          <span className="text-gray-300 mr-4">Height</span>
          <input
            type="number"
            value={heightCm}
            onChange={(e) => setHeightCm(e.target.value)}
            onFocus={() => setIsCmFocused(true)}
            onBlur={() => setIsCmFocused(false)}
            className="flex-1 bg-transparent outline-none text-black text-lg"
            placeholder=""
          />
          <span className={`ml-4 ${isCmFocused ? 'text-gray-600' : 'text-gray-200'}`}>
            cm
          </span>
        </div>
      )}

      {/* Error Message */}
      {!isValid && (
        <p className="text-black text-sm">
          Please enter your height
        </p>
      )}

      {/* Validation Error */}
      {showError && (
        <div className="p-4 rounded-lg border-2 border-dashed border-gray-200 bg-gray-50">
          <p className="text-gray-700 text-sm leading-relaxed">
            🙋🏻‍♀️️ Hello there! It seems that there might be an issue with the number you entered.
            Please review and input your height again. We're here to help you successfully reach
            your goals!
          </p>
        </div>
      )}

      {/* Continue Button */}
      <div className="mt-8">
        <button 
          onClick={() => isValid && !showError && setCurrentStep(currentStep + 1)}
          className={`w-full h-14 rounded-lg relative flex items-center justify-center transition-all duration-300
            ${isValid && !showError
              ? 'bg-black hover:bg-gray-900' 
              : 'bg-gray-200 cursor-not-allowed'}`}
        >
          <span className="text-white text-lg font-medium">Continue</span>
          {isValid && !showError && (
            <div className="absolute right-4 w-10 h-10 bg-gray-900 rounded-lg 
                         flex items-center justify-center transition-transform 
                         group-hover:scale-105 group-hover:bg-gray-800">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
          )}
        </button>
      </div>
    </div>
  );
} 