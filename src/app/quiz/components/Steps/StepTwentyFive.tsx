"use client";

import React, { useState } from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import { ArrowRight } from "lucide-react";

type Unit = 'imperial' | 'metric';

export default function StepTwentyFive() {
  const { 
    setCurrentStep, 
    currentStep, 
    unit, 
    setUnit,
    height 
  } = useQuizContext();
  const [weightSt, setWeightSt] = useState('');
  const [weightLbs, setWeightLbs] = useState('');
  const [weightKg, setWeightKg] = useState('');
  const [isStFocused, setIsStFocused] = useState(false);
  const [isLbsFocused, setIsLbsFocused] = useState(false);
  const [isKgFocused, setIsKgFocused] = useState(false);
  const [targetWeightSt, setTargetWeightSt] = useState('');
  const [targetWeightLbs, setTargetWeightLbs] = useState('');
  const [targetWeightKg, setTargetWeightKg] = useState('');
  const [isTargetStFocused, setIsTargetStFocused] = useState(false);
  const [isTargetLbsFocused, setIsTargetLbsFocused] = useState(false);
  const [isTargetKgFocused, setIsTargetKgFocused] = useState(false);
  const [error, setError] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [bmiWarning, setBmiWarning] = useState(false);

  const handleUnitChange = (newUnit: Unit) => {
    if (newUnit === unit) return;

    if (newUnit === 'metric' && weightSt && weightLbs) {
      setWeightKg(convertImperialToMetricWeight(weightSt, weightLbs));
    } else if (newUnit === 'imperial' && weightKg) {
      const { st, lbs } = convertMetricToImperialWeight(weightKg);
      setWeightSt(st);
      setWeightLbs(lbs);
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

  const calculateBMI = () => {
    if (!height) return null;
    
    if (unit === 'imperial') {
      const heightInches = parseFloat(height);
      const weightLbsTotal = (parseInt(weightSt) * 14) + parseInt(weightLbs);
      return (weightLbsTotal * 703) / (heightInches * heightInches);
    } else {
      const heightM = parseFloat(height) / 100;
      return parseInt(weightKg) / (heightM * heightM);
    }
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

  const isValid = unit === 'imperial' ? (weightSt && weightLbs) : weightKg;
  
  // Update BMI when weight changes
  React.useEffect(() => {
    if (isValid) {
      setBmi(calculateBMI());
    } else {
      setBmi(null);
    }
  }, [weightSt, weightLbs, weightKg, unit]);

  const showLowBMIWarning = isValid && bmi !== null && bmi < 18.5;

  return (
    <div className="space-y-10">
      {/* Question */}
      <div className="text-center">
        <h1 className="text-black text-[32px] font-medium tracking-[-0.03em]">
          What is your weight?
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

      {/* Weight Input */}
      {unit === 'imperial' ? (
        <div className="flex gap-3">
          <div className="flex-1">
            <div className="flex items-center h-16 px-6 rounded-lg border border-gray-200 bg-white focus-within:border-black transition-colors">
              <span className="text-gray-300 mr-4">Weight</span>
              <input
                type="number"
                value={weightSt}
                onChange={(e) => setWeightSt(e.target.value)}
                onFocus={() => setIsStFocused(true)}
                onBlur={() => setIsStFocused(false)}
                className="flex-1 bg-transparent outline-none text-black text-lg"
                placeholder=""
              />
              <span className={`ml-4 ${isStFocused ? 'text-gray-600' : 'text-gray-200'}`}>
                st
              </span>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center h-16 px-6 rounded-lg border border-gray-200 bg-white focus-within:border-black transition-colors">
              <input
                type="number"
                value={weightLbs}
                onChange={(e) => setWeightLbs(e.target.value)}
                onFocus={() => setIsLbsFocused(true)}
                onBlur={() => setIsLbsFocused(false)}
                className="flex-1 bg-transparent outline-none text-black text-lg"
                placeholder=""
              />
              <span className={`ml-4 ${isLbsFocused ? 'text-gray-600' : 'text-gray-200'}`}>
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
            value={weightKg}
            onChange={(e) => setWeightKg(e.target.value)}
            onFocus={() => setIsKgFocused(true)}
            onBlur={() => setIsKgFocused(false)}
            className="flex-1 bg-transparent outline-none text-black text-lg"
            placeholder=""
          />
          <span className={`ml-4 ${isKgFocused ? 'text-gray-600' : 'text-gray-200'}`}>
            kg
          </span>
        </div>
      )}

      {/* Error Message */}
      {!isValid && (
        <p className="text-black text-sm">
          Please enter your weight
        </p>
      )}

      {/* Continue Button */}
      <div className="mt-8">
        <button 
          onClick={() => isValid && setCurrentStep(currentStep + 1)}
          className={`w-full h-14 rounded-lg relative flex items-center justify-center transition-all duration-300
            ${isValid
              ? 'bg-black hover:bg-gray-900' 
              : 'bg-gray-200 cursor-not-allowed'}`}
        >
          <span className="text-white text-lg font-medium">Continue</span>
          {isValid && (
            <div className="absolute right-4 w-10 h-10 bg-gray-900 rounded-lg 
                         flex items-center justify-center transition-transform 
                         group-hover:scale-105 group-hover:bg-gray-800">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
          )}
        </button>
      </div>

      {/* Low BMI Warning */}
      {showLowBMIWarning && (
        <div className="text-center space-y-2">
          <p className="text-black text-sm font-bold">
            Please review the information you entered again
          </p>
          <p className="text-gray-800 text-lg md:text-xl font-medium">
            If this is your correct current weight, we don't recommend you lose any weight given your BMI {'<'} 18.5.
          </p>
          <p className="text-gray-800 text-lg md:text-xl font-medium">
            But our program can still help you alleviate common
          </p>
          <p className="text-gray-800 text-lg md:text-xl font-medium">
            <span className="text-black font-bold">menopause</span> symptoms if you choose to proceed.
          </p>
        </div>
      )}
    </div>
  );
} 