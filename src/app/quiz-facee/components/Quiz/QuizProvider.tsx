"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import { QuizState, Unit } from "../../types/quiz.types";
import { GOALS, EXPERIENCES, BODY_TYPES, TARGET_BODY_TYPES, TARGET_ZONES, ACTIVITY_LEVELS, MEDICAL_CONDITIONS, WEEKLY_FREQUENCIES, SESSION_DURATIONS, CAPABILITIES, COACH_CAPABILITIES, SLEEP_DURATIONS, WATER_INTAKES, WALKING_TIMES, MENOPAUSE_STATUSES, DIET_TYPES, FOOD_ALLERGIES, PROGRAM_SUCCESS } from "../../constants/quiz-data";

interface QuizContextType extends QuizState {
  setCurrentStep: (step: number) => void;
  setUnit: (unit: Unit) => void;
  setWeight: (st: string, lbs: string, kg: string) => void;
  setTargetWeight: (st: string, lbs: string, kg: string) => void;
  setHeight: (height: string) => void;
  toggleSelection: (field: keyof QuizState, id: string) => void;
  setSingleSelection: (field: keyof QuizState, id: string) => void;
  nextStep: () => void;
  previousStep: () => void;
  resetQuiz: () => void;
  answers: Record<number, string | string[]>;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

const initialState: QuizState = {
  currentStep: 1,
  unit: 'imperial',
  height: '',
  weightSt: '',
  weightLbs: '',
  weightKg: '',
  targetWeightSt: '',
  targetWeightLbs: '',
  targetWeightKg: '',
  goals: GOALS,
  experiences: EXPERIENCES,
  bodyTypes: BODY_TYPES,
  targetBodyTypes: TARGET_BODY_TYPES,
  targetZones: TARGET_ZONES,
  activityLevels: ACTIVITY_LEVELS,
  medicalConditions: MEDICAL_CONDITIONS,
  weeklyFrequencies: WEEKLY_FREQUENCIES,
  sessionDurations: SESSION_DURATIONS,
  capabilities: CAPABILITIES,
  coachCapabilities: COACH_CAPABILITIES,
  sleepDurations: SLEEP_DURATIONS,
  waterIntakes: WATER_INTAKES,
  walkingTimes: WALKING_TIMES,
  menopauseStatuses: MENOPAUSE_STATUSES,
  dietTypes: DIET_TYPES,
  foodAllergies: FOOD_ALLERGIES,
  programSuccess: PROGRAM_SUCCESS,
  bodyType: '',
  timeOption: '',
  targetBodyType: '',
  equipment: [],
  preferences: [],
  restrictions: [],
  dietPreferences: [],
  sleepPreferences: [],
  stressPreferences: [],
  experience: '',
  workoutPreferences: [],
  healthRestrictions: [],
  dietaryPreferences: [],
  activityLevel: '',
  weeklyWorkoutFrequency: '',
  sessionDuration: '',
  physicalCapabilities: [],
  sleepDuration: '',
  answers: {},
};

export const QuizProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<QuizState>(initialState);
  const [answers, setAnswers] = useState<Record<number, string | string[]>>({});

  useEffect(() => {
    const savedState = localStorage.getItem("quizState");
    if (savedState) {
      setState(JSON.parse(savedState));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("quizState", JSON.stringify(state));
  }, [state]);

  const setCurrentStep = useCallback((step: number) => {
    setState(prev => ({ ...prev, currentStep: step }));
  }, []);

  const setUnit = useCallback((unit: Unit) => {
    setState(prev => ({ ...prev, unit }));
  }, []);

  const setWeight = useCallback((st: string, lbs: string, kg: string) => {
    setState(prev => ({ ...prev, weightSt: st, weightLbs: lbs, weightKg: kg }));
  }, []);

  const setTargetWeight = useCallback((st: string, lbs: string, kg: string) => {
    setState(prev => ({ ...prev, targetWeightSt: st, targetWeightLbs: lbs, targetWeightKg: kg }));
  }, []);

  const setHeight = useCallback((height: string) => {
    setState(prev => ({ ...prev, height }));
  }, []);

  const toggleSelection = useCallback((field: keyof QuizState, id: string) => {
    setState(prev => ({
      ...prev,
      [field]: Array.isArray(prev[field])
        ? (prev[field] as any[]).map(item =>
            item.id === id ? { ...item, selected: !item.selected } : item
          )
        : prev[field],
    }));
  }, []);

  const setSingleSelection = useCallback((field: keyof QuizState, id: string) => {
    setState(prev => ({
      ...prev,
      [field]: Array.isArray(prev[field])
        ? (prev[field] as any[]).map(item =>
            item.id === id ? { ...item, selected: true } : { ...item, selected: false }
          )
        : prev[field],
    }));
  }, []);

  const nextStep = useCallback(() => {
    setState(prev => ({
      ...prev,
      currentStep: Math.min(prev.currentStep + 1, 32),
    }));
  }, []);

  const previousStep = useCallback(() => {
    setState(prev => ({
      ...prev,
      currentStep: Math.max(prev.currentStep - 1, 1),
    }));
  }, []);

  const resetQuiz = useCallback(() => {
    localStorage.removeItem("quizState");
    setState(initialState);
  }, []);

  const value: QuizContextType = {
    ...state,
    setCurrentStep,
    setUnit,
    setWeight,
    setTargetWeight,
    setHeight,
    toggleSelection,
    setSingleSelection,
    nextStep,
    previousStep,
    resetQuiz,
    answers,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

export const useQuizContext = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuizContext must be used inside QuizProvider");
  }
  return context;
}; 