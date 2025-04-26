import { Unit } from '../types';

export const convertWeight = (value: string, fromUnit: Unit, toUnit: Unit): string => {
  const numValue = parseFloat(value);
  if (isNaN(numValue)) return '';

  if (fromUnit === toUnit) return value;

  if (fromUnit === 'imperial' && toUnit === 'metric') {
    return (numValue * 0.453592).toFixed(1);
  }

  if (fromUnit === 'metric' && toUnit === 'imperial') {
    return (numValue * 2.20462).toFixed(1);
  }

  return value;
};

export const convertStonesToKg = (stones: string, pounds: string): string => {
  const stonesNum = parseFloat(stones) || 0;
  const poundsNum = parseFloat(pounds) || 0;
  const totalPounds = (stonesNum * 14) + poundsNum;
  return (totalPounds * 0.453592).toFixed(1);
};

export const convertKgToStonesAndPounds = (kg: string): { stones: string; pounds: string } => {
  const kgNum = parseFloat(kg);
  if (isNaN(kgNum)) return { stones: '', pounds: '' };

  const totalPounds = kgNum * 2.20462;
  const stones = Math.floor(totalPounds / 14);
  const pounds = Math.round(totalPounds % 14);

  return {
    stones: stones.toString(),
    pounds: pounds.toString(),
  };
};

export const validateWeight = (value: string, unit: Unit): boolean => {
  const numValue = parseFloat(value);
  if (isNaN(numValue)) return false;

  if (unit === 'imperial') {
    return numValue >= 50 && numValue <= 500;
  }

  return numValue >= 22.7 && numValue <= 226.8;
};

export const validateTargetWeight = (value: string, unit: Unit, currentWeight: string): boolean => {
  const numValue = parseFloat(value);
  const currentNumValue = parseFloat(currentWeight);
  if (isNaN(numValue) || isNaN(currentNumValue)) return false;

  if (unit === 'imperial') {
    return numValue >= 50 && numValue <= 500 && numValue < currentNumValue;
  }

  return numValue >= 22.7 && numValue <= 226.8 && numValue < currentNumValue;
};

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
};

export const calculateProgress = (currentStep: number, totalSteps: number): number => {
  return Math.round((currentStep / totalSteps) * 100);
};

export const getNextStep = (currentStep: number, totalSteps: number): number => {
  return Math.min(currentStep + 1, totalSteps);
};

export const getPreviousStep = (currentStep: number, totalSteps: number): number => {
  return Math.max(currentStep - 1, 1);
};

export const isStepValid = (step: number, state: any): boolean => {
  switch (step) {
    case 1:
      return state.goals.some((goal: any) => goal.selected);
    case 2:
      return state.experiences.some((exp: any) => exp.selected);
    case 3:
      return state.bodyType !== '';
    case 4:
      return state.timeOption !== '';
    case 5:
      return state.targetBodyType !== '';
    case 6:
      return state.targetZones.some((zone: any) => zone.selected);
    case 7:
      return state.activityLevels.some((level: any) => level.selected);
    case 8:
      return state.medicalConditions.some((condition: any) => condition.selected);
    case 9:
      return state.weeklyFrequencies.some((freq: any) => freq.selected);
    case 10:
      return state.sessionDurations.some((duration: any) => duration.selected);
    case 11:
      return state.capabilities.some((cap: any) => cap.selected);
    case 12:
      return state.coachCapabilities.some((cap: any) => cap.selected);
    case 13:
      return state.sleepDurations.some((duration: any) => duration.selected);
    case 14:
      return state.waterIntakes.some((intake: any) => intake.selected);
    case 15:
      return state.walkingTimes.some((time: any) => time.selected);
    case 16:
      return state.menopauseStatuses.some((status: any) => status.selected);
    case 17:
      return state.dietTypes.some((type: any) => type.selected);
    case 18:
      return state.foodAllergies.some((allergy: any) => allergy.selected);
    case 19:
      return state.programSuccess.some((success: any) => success.selected);
    case 20:
      return state.selectedPlan !== '';
    default:
      return true;
  }
}; 