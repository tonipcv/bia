import { create } from 'zustand';
import { QuizState, Unit } from '../types/quiz.types';
import { GOALS, EXPERIENCES, BODY_TYPES, TARGET_BODY_TYPES, TARGET_ZONES, ACTIVITY_LEVELS, MEDICAL_CONDITIONS, WEEKLY_FREQUENCIES, SESSION_DURATIONS, CAPABILITIES, COACH_CAPABILITIES, SLEEP_DURATIONS, WATER_INTAKES, WALKING_TIMES, MENOPAUSE_STATUSES, DIET_TYPES, FOOD_ALLERGIES, PROGRAM_SUCCESS } from '../constants/quiz-data';

interface QuizStore extends QuizState {
  setCurrentStep: (step: number) => void;
  setUnit: (unit: Unit) => void;
  setWeight: (st: string, lbs: string, kg: string) => void;
  setTargetWeight: (st: string, lbs: string, kg: string) => void;
  setHeight: (height: string) => void;
  toggleSelection: (field: keyof QuizState, id: string) => void;
  setSingleSelection: (field: keyof QuizState, id: string) => void;
  nextStep: () => void;
  previousStep: () => void;
  toggleGoal: (goalId: string) => void;
  toggleZone: (zoneId: string) => void;
  selectActivity: (activityId: string) => void;
  toggleCondition: (conditionId: string) => void;
  selectFrequency: (frequencyId: string) => void;
  selectDuration: (durationId: string) => void;
  selectCapability: (capabilityId: string) => void;
  selectCoachCapability: (capabilityId: string) => void;
  selectSleepDuration: (durationId: string) => void;
  selectWaterIntake: (intakeId: string) => void;
  selectWalkingTime: (timeId: string) => void;
  selectMenopauseStatus: (statusId: string) => void;
  selectDietType: (dietId: string) => void;
  toggleAllergy: (allergyId: string) => void;
  selectProgramSuccess: (successId: string) => void;
  resetState: () => void;
}

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

export const useQuizState = create<QuizStore>((set) => ({
  ...initialState,

  setCurrentStep: (step: number) => set({ currentStep: step }),

  setUnit: (unit: Unit) => set({ unit }),

  setWeight: (st: string, lbs: string, kg: string) => 
    set({ weightSt: st, weightLbs: lbs, weightKg: kg }),

  setTargetWeight: (st: string, lbs: string, kg: string) => 
    set({ targetWeightSt: st, targetWeightLbs: lbs, targetWeightKg: kg }),

  setHeight: (height: string) => set({ height }),

  toggleSelection: (field: keyof QuizState, id: string) =>
    set((state) => ({
      [field]: Array.isArray(state[field])
        ? (state[field] as any[]).map((item) =>
            item.id === id ? { ...item, selected: !item.selected } : item
          )
        : state[field],
    })),

  setSingleSelection: (field: keyof QuizState, id: string) =>
    set((state) => ({
      [field]: Array.isArray(state[field])
        ? (state[field] as any[]).map((item) =>
            item.id === id ? { ...item, selected: true } : { ...item, selected: false }
          )
        : state[field],
    })),

  nextStep: () =>
    set((state) => ({
      currentStep: Math.min(state.currentStep + 1, 36),
    })),

  previousStep: () =>
    set((state) => ({
      currentStep: Math.max(state.currentStep - 1, 1),
    })),

  toggleGoal: (goalId: string) =>
    set((state: QuizState) => ({
      goals: state.goals.map((goal) =>
        goal.id === goalId ? { ...goal, selected: !goal.selected } : goal
      ),
    })),

  toggleZone: (zoneId: string) =>
    set((state: QuizState) => ({
      targetZones: state.targetZones.map((zone) =>
        zone.id === zoneId ? { ...zone, selected: !zone.selected } : zone
      ),
    })),

  selectActivity: (activityId: string) =>
    set((state: QuizState) => ({
      activityLevels: state.activityLevels.map((activity) =>
        activity.id === activityId
          ? { ...activity, selected: true }
          : { ...activity, selected: false }
      ),
    })),

  toggleCondition: (conditionId: string) =>
    set((state: QuizState) => ({
      medicalConditions: state.medicalConditions.map((condition) =>
        condition.id === conditionId
          ? { ...condition, selected: !condition.selected }
          : condition
      ),
    })),

  selectFrequency: (frequencyId: string) =>
    set((state: QuizState) => ({
      weeklyFrequencies: state.weeklyFrequencies.map((frequency) =>
        frequency.id === frequencyId
          ? { ...frequency, selected: true }
          : { ...frequency, selected: false }
      ),
    })),

  selectDuration: (durationId: string) =>
    set((state: QuizState) => ({
      sessionDurations: state.sessionDurations.map((duration) =>
        duration.id === durationId
          ? { ...duration, selected: true }
          : { ...duration, selected: false }
      ),
    })),

  selectCapability: (capabilityId: string) =>
    set((state: QuizState) => ({
      capabilities: state.capabilities.map((capability) =>
        capability.id === capabilityId
          ? { ...capability, selected: true }
          : { ...capability, selected: false }
      ),
    })),

  selectCoachCapability: (capabilityId: string) =>
    set((state: QuizState) => ({
      coachCapabilities: state.coachCapabilities.map((capability) =>
        capability.id === capabilityId
          ? { ...capability, selected: true }
          : { ...capability, selected: false }
      ),
    })),

  selectSleepDuration: (durationId: string) =>
    set((state: QuizState) => ({
      sleepDurations: state.sleepDurations.map((duration) =>
        duration.id === durationId
          ? { ...duration, selected: true }
          : { ...duration, selected: false }
      ),
    })),

  selectWaterIntake: (intakeId: string) =>
    set((state: QuizState) => ({
      waterIntakes: state.waterIntakes.map((intake) =>
        intake.id === intakeId
          ? { ...intake, selected: true }
          : { ...intake, selected: false }
      ),
    })),

  selectWalkingTime: (timeId: string) =>
    set((state: QuizState) => ({
      walkingTimes: state.walkingTimes.map((time) =>
        time.id === timeId
          ? { ...time, selected: true }
          : { ...time, selected: false }
      ),
    })),

  selectMenopauseStatus: (statusId: string) =>
    set((state: QuizState) => ({
      menopauseStatuses: state.menopauseStatuses.map((status) =>
        status.id === statusId
          ? { ...status, selected: true }
          : { ...status, selected: false }
      ),
    })),

  selectDietType: (dietId: string) =>
    set((state: QuizState) => ({
      dietTypes: state.dietTypes.map((diet) =>
        diet.id === dietId
          ? { ...diet, selected: true }
          : { ...diet, selected: false }
      ),
    })),

  toggleAllergy: (allergyId: string) =>
    set((state: QuizState) => ({
      foodAllergies: state.foodAllergies.map((allergy) =>
        allergy.id === allergyId
          ? { ...allergy, selected: !allergy.selected }
          : allergy
      ),
    })),

  selectProgramSuccess: (successId: string) =>
    set((state: QuizState) => ({
      programSuccess: state.programSuccess.map((success) =>
        success.id === successId
          ? { ...success, selected: true }
          : { ...success, selected: false }
      ),
    })),

  resetState: () => set(initialState),
})); 