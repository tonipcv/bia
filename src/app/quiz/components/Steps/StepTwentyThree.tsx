"use client";

import React, { useState } from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import { Check, ArrowRight } from "lucide-react";

export default function StepTwentyThree() {
  const { setCurrentStep, currentStep } = useQuizContext();
  const [age, setAge] = useState('');
  const [consent, setConsent] = useState(false);
  const [isAgeFocused, setIsAgeFocused] = useState(false);
  const [heightFt, setHeightFt] = useState('');
  const [heightIn, setHeightIn] = useState('');
  const [heightCm, setHeightCm] = useState('');
  const [heightError, setHeightError] = useState(false);
  const [isFtFocused, setIsFtFocused] = useState(false);
  const [isInFocused, setIsInFocused] = useState(false);
  const [isCmFocused, setIsCmFocused] = useState(false);

  const isValid = age !== '' && consent;

  return (
    <div className="space-y-10">
      {/* Question */}
      <div className="text-center">
        <h1 className="text-black text-[32px] font-medium tracking-[-0.03em]">
          How old are you?
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

      {/* Age Input */}
      <div className="relative">
        <div className="flex items-center h-16 px-6 rounded-lg border border-gray-200 bg-white focus-within:border-black transition-colors">
          <span className={`mr-4 ${isAgeFocused ? 'text-gray-600' : 'text-gray-300'}`}>
            Age
          </span>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            onFocus={() => setIsAgeFocused(true)}
            onBlur={() => setIsAgeFocused(false)}
            className="flex-1 bg-transparent outline-none text-black text-lg"
            placeholder=""
          />
          <span className={`ml-4 ${isAgeFocused ? 'text-gray-600' : 'text-gray-200'}`}>
            years
          </span>
        </div>
      </div>

      {/* Consent Checkbox */}
      <div className="flex items-start gap-4">
        <button
          onClick={() => setConsent(!consent)}
          className={`w-6 h-6 rounded border flex-shrink-0 flex items-center justify-center transition-all duration-300 cursor-pointer
            ${consent 
              ? 'bg-black border-black' 
              : 'border-gray-300 bg-white hover:border-black'}`}
        >
          {consent && (
            <Check className="w-4 h-4 text-white" />
          )}
        </button>
        <p className="text-gray-600 text-xs leading-relaxed">
          I consent to Reverse Health processing my health onboarding data to provide services and enhance my user experience{' '}
          <a 
            href="#" 
            className="text-black underline hover:text-gray-600 transition-colors"
            onClick={(e) => e.preventDefault()}
          >
            Privacy Policy
          </a>
          .
        </p>
      </div>

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
    </div>
  );
} 