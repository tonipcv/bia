export type Goal = {
  id: string;
  text: string;
  emoji: string;
  selected: boolean;
};

export type Experience = {
  id: string;
  text: string;
  emoji: string;
  selected: boolean;
};

export type BodyType = {
  id: string;
  text: string;
  image: string;
};

export type TimeOption = {
  id: string;
  text: string;
  emoji: string;
};

export type TargetBodyType = {
  id: string;
  text: string;
  image: string;
};

export type TargetZone = {
  id: string;
  text: string;
  selected: boolean;
  isWholeBody?: boolean;
};

export type ActivityLevel = {
  id: string;
  text: string;
  emoji: string;
  selected: boolean;
};

export type MedicalCondition = {
  id: string;
  text: string;
  image: string;
  selected: boolean;
  isNone?: boolean;
};

export type WeeklyFrequency = {
  id: string;
  text: string;
  emoji: string;
  selected: boolean;
};

export type SessionDuration = {
  id: string;
  text: string;
  emoji: string;
  selected: boolean;
};

export type Capability = {
  id: string;
  text: string;
  emoji: string;
  selected: boolean;
};

export type CoachCapability = {
  id: string;
  text: string;
  emoji: string;
  selected: boolean;
};

export type SleepDuration = {
  id: string;
  text: string;
  emoji: string;
  selected: boolean;
};

export type WaterIntake = {
  id: string;
  text: string;
  emoji: string;
  selected: boolean;
};

export type WalkingTime = {
  id: string;
  text: string;
  emoji: string;
  selected: boolean;
};

export type MenopauseStatus = {
  id: string;
  text: string;
  emoji: string;
  selected: boolean;
};

export type DietType = {
  id: string;
  text: string;
  emoji: string;
  selected: boolean;
};

export type FoodAllergy = {
  id: string;
  text: string;
  emoji: string;
  selected: boolean;
  isNone?: boolean;
};

export type ProgramSuccess = {
  id: string;
  text: string;
  emoji: string;
  selected: boolean;
};

export type Unit = 'imperial' | 'metric';

export type PricingPlan = {
  id: string;
  duration: string;
  originalPrice: number;
  discountedPrice: number;
  perDay: number;
  discountedPerDay: number;
  isPopular?: boolean;
  hasGift?: boolean;
};

export type QuizState = {
  currentStep: number;
  unit: Unit;
  height: string;
  weightSt: string;
  weightLbs: string;
  weightKg: string;
  targetWeightSt: string;
  targetWeightLbs: string;
  targetWeightKg: string;
  goals: Goal[];
  experiences: Experience[];
  bodyTypes: BodyType[];
  targetBodyTypes: TargetBodyType[];
  targetZones: TargetZone[];
  activityLevels: ActivityLevel[];
  medicalConditions: MedicalCondition[];
  weeklyFrequencies: WeeklyFrequency[];
  sessionDurations: SessionDuration[];
  capabilities: Capability[];
  coachCapabilities: CoachCapability[];
  sleepDurations: SleepDuration[];
  waterIntakes: WaterIntake[];
  walkingTimes: WalkingTime[];
  menopauseStatuses: MenopauseStatus[];
  dietTypes: DietType[];
  foodAllergies: FoodAllergy[];
  programSuccess: ProgramSuccess[];
  bodyType: string;
  timeOption: string;
  targetBodyType: string;
  equipment: string[];
  preferences: string[];
  restrictions: string[];
  dietPreferences: string[];
  sleepPreferences: string[];
  stressPreferences: string[];
  experience: string;
  workoutPreferences: string[];
  healthRestrictions: string[];
  dietaryPreferences: string[];
  activityLevel: string;
  weeklyWorkoutFrequency: string;
  sessionDuration: string;
  physicalCapabilities: string[];
  sleepDuration: string;
  answers: Record<number, string | string[]>;
};

export interface Equipment {
  id: string;
  text: string;
  emoji: string;
  selected: boolean;
}

export interface WorkoutPreference {
  id: string;
  text: string;
  emoji: string;
  selected: boolean;
}

export interface HealthRestriction {
  id: string;
  text: string;
  emoji: string;
  selected: boolean;
}

export interface DietPreference {
  id: string;
  text: string;
  emoji: string;
}

export interface SleepPreference {
  id: string;
  text: string;
  emoji: string;
}

export interface StressPreference {
  id: string;
  text: string;
  emoji: string;
  selected: boolean;
}

export interface QuizStore {
  state: QuizState;
  toggleSelection: (field: keyof QuizState, id: string) => void;
  setSingleSelection: (field: keyof QuizState, id: string) => void;
  nextStep: () => void;
  previousStep: () => void;
} 