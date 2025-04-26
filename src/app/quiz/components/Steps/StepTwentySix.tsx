"use client";

import React, { useState } from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import { ArrowRight } from "lucide-react";

type Unit = 'imperial' | 'metric';

export default function StepTwentySix() {
  const { 
    setCurrentStep, 
    currentStep, 
    unit, 
    setUnit,
    weightSt,
    weightLbs,
    weightKg,
  } = useQuizContext();
  
  const [targetWeightSt, setTargetWeightSt] = useState('');
  const [targetWeightLbs, setTargetWeightLbs] = useState('');
  const [targetWeightKg, setTargetWeightKg] = useState('');
  const [isTargetStFocused, setIsTargetStFocused] = useState(false);
  const [isTargetLbsFocused, setIsTargetLbsFocused] = useState(false);
  const [isTargetKgFocused, setIsTargetKgFocused] = useState(false);

  const handleUnitChange = (newUnit: Unit) => {
    if (newUnit === unit) return;

    if (newUnit === 'metric' && targetWeightSt && targetWeightLbs) {
      setTargetWeightKg(convertImperialToMetricWeight(targetWeightSt, targetWeightLbs));
    } else if (newUnit === 'imperial' && targetWeightKg) {
      const { st, lbs } = convertMetricToImperialWeight(targetWeightKg);
      setTargetWeightSt(st);
      setTargetWeightLbs(lbs);
    }

    setUnit(newUnit);
  };

  const convertImperialToMetricWeight = (st: string, lbs: string) => {
    const totalLbs = (parseInt(st) * 14) + parseInt(lbs);
    return Math.round(totalLbs * 0.45359237).toString();
  };

  const convertMetricToImperialWeight = (kg: string) => {
    const totalLbs = Math.round(parseInt(kg) * 2.20462);
    const st = Math.floor(totalLbs / 14);
    const lbs = totalLbs % 14;
    return { st: st.toString(), lbs: lbs.toString() };
  };

  const validateTargetWeight = () => {
    const currentWeightKg = unit === 'imperial' 
      ? parseFloat(convertImperialToMetricWeight(weightSt, weightLbs))
      : parseFloat(weightKg);
    
    const calculatedTargetKg = unit === 'imperial'
      ? parseFloat(convertImperialToMetricWeight(targetWeightSt, targetWeightLbs))
      : parseFloat(targetWeightKg);

    if (calculatedTargetKg >= currentWeightKg) {
      return 'too-high';
    }

    const minWeight = currentWeightKg * 0.85;
    if (calculatedTargetKg < minWeight) {
      return 'too-low';
    }

    return 'valid';
  };

  const isValid = unit === 'imperial' ? (targetWeightSt && targetWeightLbs) : targetWeightKg;
  const weightValidation = isValid ? validateTargetWeight() : 'valid';

  return (
    <div className="space-y-10">
      {/* Question */}
      <div className="text-center">
        <h1 className="text-black text-[32px] font-medium tracking-[-0.03em]">
          What is your desired weight?
        </h1>
      </div>

      {/* Description */}
      <div className="text-center">
        <p className="text-gray-600 text-sm tracking-[-0.03em] leading-relaxed">
          Our program has helped thousands of women
          <br />
          just like you reach their desired body weight.
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

      {/* Weight Input */}
      {unit === 'imperial' ? (
        <div className="flex gap-3">
          <div className="flex-1">
            <div className="flex items-center h-16 px-6 rounded-lg border border-gray-200 bg-white focus-within:border-black transition-colors">
              <span className="text-gray-300 mr-4">Weight</span>
              <input
                type="number"
                value={targetWeightSt}
                onChange={(e) => setTargetWeightSt(e.target.value)}
                onFocus={() => setIsTargetStFocused(true)}
                onBlur={() => setIsTargetStFocused(false)}
                className="flex-1 bg-transparent outline-none text-black text-lg"
                placeholder=""
              />
              <span className={`ml-4 ${isTargetStFocused ? 'text-gray-600' : 'text-gray-200'}`}>
                st
              </span>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center h-16 px-6 rounded-lg border border-gray-200 bg-white focus-within:border-black transition-colors">
              <input
                type="number"
                value={targetWeightLbs}
                onChange={(e) => setTargetWeightLbs(e.target.value)}
                onFocus={() => setIsTargetLbsFocused(true)}
                onBlur={() => setIsTargetLbsFocused(false)}
                className="flex-1 bg-transparent outline-none text-black text-lg"
                placeholder=""
              />
              <span className={`ml-4 ${isTargetLbsFocused ? 'text-gray-600' : 'text-gray-200'}`}>
                lbs
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center h-16 px-6 rounded-lg border border-gray-200 bg-white focus-within:border-black transition-colors">
          <span className="text-gray-300 mr-4">Weight</span>
          <input
            type="number"
            value={targetWeightKg}
            onChange={(e) => setTargetWeightKg(e.target.value)}
            onFocus={() => setIsTargetKgFocused(true)}
            onBlur={() => setIsTargetKgFocused(false)}
            className="flex-1 bg-transparent outline-none text-black text-lg"
            placeholder=""
          />
          <span className={`ml-4 ${isTargetKgFocused ? 'text-gray-600' : 'text-gray-200'}`}>
            kg
          </span>
        </div>
      )}

      {/* Error Message */}
      {!isValid && (
        <p className="text-black text-sm">
          Please enter your target weight
        </p>
      )}

      {/* Continue Button */}
      <div className="mt-8">
        <button 
          onClick={() => isValid && weightValidation === 'valid' && setCurrentStep(currentStep + 1)}
          className={`w-full h-14 rounded-lg relative flex items-center justify-center transition-all duration-300
            ${isValid && weightValidation === 'valid'
              ? 'bg-black hover:bg-gray-900' 
              : 'bg-gray-200 cursor-not-allowed'}`}
        >
          <span className="text-white text-lg font-medium">Continue</span>
          {isValid && weightValidation === 'valid' && (
            <div className="absolute right-4 w-10 h-10 bg-gray-900 rounded-lg 
                         flex items-center justify-center transition-transform 
                         group-hover:scale-105 group-hover:bg-gray-800">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
          )}
        </button>
      </div>

      {/* Validation Messages */}
      {weightValidation === 'too-low' && (
        <div className="text-center space-y-2">
          <p className="text-gray-800 text-lg md:text-xl font-medium">
            We're afraid your desired body weight is outside
            <br />
            of our recommended range.
          </p>
          <p className="text-black text-sm font-bold">
            Please edit your desired weight to continue.
          </p>
        </div>
      )}

      {weightValidation === 'too-high' && (
        <div className="text-center space-y-2">
          <p className="text-gray-800 text-lg md:text-xl font-medium">
            We're sorry, we currently only offer a program
            <br />
            to lose weight, not to gain weight.
          </p>
          <p className="text-black text-sm font-bold">
            Please edit your desired weight to continue.
          </p>
        </div>
      )}
    </div>
  );
} 