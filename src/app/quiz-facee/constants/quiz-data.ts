import { Goal, Experience, BodyType, TargetBodyType, TargetZone, ActivityLevel, MedicalCondition, WeeklyFrequency, SessionDuration, Capability, CoachCapability, SleepDuration, WaterIntake, WalkingTime, MenopauseStatus, DietType, FoodAllergy, ProgramSuccess, PricingPlan, WorkoutPreference, HealthRestriction } from '../types/quiz.types';

export const GOALS: Goal[] = [
  { id: 'weight-loss', text: 'Weight Loss', emoji: '⚖️', selected: false },
  { id: 'muscle-gain', text: 'Muscle Gain', emoji: '💪', selected: false },
  { id: 'tone', text: 'Tone Up', emoji: '🎯', selected: false },
  { id: 'strength', text: 'Build Strength', emoji: '🏋️', selected: false },
  { id: 'flexibility', text: 'Improve Flexibility', emoji: '🧘', selected: false },
  { id: 'endurance', text: 'Build Endurance', emoji: '🏃', selected: false },
];

export const EXPERIENCES: Experience[] = [
  { id: 'beginner', text: 'Beginner', emoji: '🌱', selected: false },
  { id: 'intermediate', text: 'Intermediate', emoji: '🌿', selected: false },
  { id: 'advanced', text: 'Advanced', emoji: '🌳', selected: false },
];

export const BODY_TYPES: BodyType[] = [
  { id: 'ectomorph', text: 'Ectomorph', image: '/images/body-types/ectomorph.png' },
  { id: 'mesomorph', text: 'Mesomorph', image: '/images/body-types/mesomorph.png' },
  { id: 'endomorph', text: 'Endomorph', image: '/images/body-types/endomorph.png' },
];

export const TARGET_BODY_TYPES: TargetBodyType[] = [
  { id: 'lean', text: 'Lean', image: '/images/target-body-types/lean.png' },
  { id: 'athletic', text: 'Athletic', image: '/images/target-body-types/athletic.png' },
  { id: 'curvy', text: 'Curvy', image: '/images/target-body-types/curvy.png' },
];

export const TARGET_ZONES: TargetZone[] = [
  { id: 'whole-body', text: 'Whole Body', selected: false, isWholeBody: true },
  { id: 'arms', text: 'Arms', selected: false },
  { id: 'back', text: 'Back', selected: false },
  { id: 'chest', text: 'Chest', selected: false },
  { id: 'core', text: 'Core', selected: false },
  { id: 'glutes', text: 'Glutes', selected: false },
  { id: 'legs', text: 'Legs', selected: false },
  { id: 'hips', text: 'Hips', selected: false },
];

export const ACTIVITY_LEVELS: ActivityLevel[] = [
  { id: 'sedentary', text: 'Sedentary', emoji: '🛋️', selected: false },
  { id: 'light', text: 'Light Exercise', emoji: '🚶', selected: false },
  { id: 'moderate', text: 'Moderate Exercise', emoji: '🏃', selected: false },
  { id: 'very-active', text: 'Very Active', emoji: '💪', selected: false },
  { id: 'extra-active', text: 'Extra Active', emoji: '🏋️', selected: false },
];

export const MEDICAL_CONDITIONS: MedicalCondition[] = [
  { id: 'none', text: 'None', image: '/images/conditions/none.png', selected: false, isNone: true },
  { id: 'back-pain', text: 'Back Pain', image: '/images/conditions/back-pain.png', selected: false },
  { id: 'joint-pain', text: 'Joint Pain', image: '/images/conditions/joint-pain.png', selected: false },
  { id: 'heart-condition', text: 'Heart Condition', image: '/images/conditions/heart.png', selected: false },
  { id: 'diabetes', text: 'Diabetes', image: '/images/conditions/diabetes.png', selected: false },
];

export const WEEKLY_FREQUENCIES: WeeklyFrequency[] = [
  { id: '2-3', text: '2-3 times', emoji: '📅', selected: false },
  { id: '3-4', text: '3-4 times', emoji: '📆', selected: false },
  { id: '4-5', text: '4-5 times', emoji: '📊', selected: false },
  { id: '5-6', text: '5-6 times', emoji: '📈', selected: false },
  { id: '6-7', text: '6-7 times', emoji: '📉', selected: false },
];

export const SESSION_DURATIONS: SessionDuration[] = [
  { id: '15-30', text: '15-30 minutes', emoji: '⏱️', selected: false },
  { id: '30-45', text: '30-45 minutes', emoji: '⏰', selected: false },
  { id: '45-60', text: '45-60 minutes', emoji: '⌛', selected: false },
  { id: '60-90', text: '60-90 minutes', emoji: '⏳', selected: false },
  { id: '90+', text: '90+ minutes', emoji: '⏲️', selected: false },
];

export const CAPABILITIES: Capability[] = [
  { id: 'push-ups', text: 'Push-ups', emoji: '💪', selected: false },
  { id: 'pull-ups', text: 'Pull-ups', emoji: '🏋️', selected: false },
  { id: 'squats', text: 'Squats', emoji: '🦵', selected: false },
  { id: 'plank', text: 'Plank', emoji: '🛑', selected: false },
  { id: 'running', text: 'Running', emoji: '🏃', selected: false },
];

export const COACH_CAPABILITIES: CoachCapability[] = [
  { id: 'nutrition', text: 'Nutrition Advice', emoji: '🥗', selected: false },
  { id: 'form', text: 'Form Correction', emoji: '🎯', selected: false },
  { id: 'motivation', text: 'Motivation', emoji: '🔥', selected: false },
  { id: 'progress', text: 'Progress Tracking', emoji: '📊', selected: false },
  { id: 'customization', text: 'Customization', emoji: '✨', selected: false },
];

export const SLEEP_DURATIONS: SleepDuration[] = [
  { id: 'less-than-6', text: 'Less than 6 hours', emoji: '😴', selected: false },
  { id: '6-7', text: '6-7 hours', emoji: '😪', selected: false },
  { id: '7-8', text: '7-8 hours', emoji: '😊', selected: false },
  { id: '8-9', text: '8-9 hours', emoji: '😌', selected: false },
  { id: 'more-than-9', text: 'More than 9 hours', emoji: '😴', selected: false },
];

export const WATER_INTAKES: WaterIntake[] = [
  { id: 'less-than-1', text: 'Less than 1L', emoji: '💧', selected: false },
  { id: '1-2', text: '1-2L', emoji: '💦', selected: false },
  { id: '2-3', text: '2-3L', emoji: '🌊', selected: false },
  { id: '3-4', text: '3-4L', emoji: '🌊', selected: false },
  { id: 'more-than-4', text: 'More than 4L', emoji: '🌊', selected: false },
];

export const WALKING_TIMES: WalkingTime[] = [
  { id: 'less-than-30', text: 'Less than 30 mins', emoji: '🚶', selected: false },
  { id: '30-60', text: '30-60 mins', emoji: '🚶‍♂️', selected: false },
  { id: '60-90', text: '60-90 mins', emoji: '🚶‍♀️', selected: false },
  { id: '90-120', text: '90-120 mins', emoji: '🏃', selected: false },
  { id: 'more-than-120', text: 'More than 120 mins', emoji: '🏃‍♂️', selected: false },
];

export const MENOPAUSE_STATUSES: MenopauseStatus[] = [
  { id: 'pre', text: 'Pre-Menopause', emoji: '🌸', selected: false },
  { id: 'peri', text: 'Peri-Menopause', emoji: '🌺', selected: false },
  { id: 'post', text: 'Post-Menopause', emoji: '🌹', selected: false },
];

export const DIET_TYPES: DietType[] = [
  { id: 'omnivore', text: 'Omnivore', emoji: '🥩', selected: false },
  { id: 'vegetarian', text: 'Vegetarian', emoji: '🥬', selected: false },
  { id: 'vegan', text: 'Vegan', emoji: '🌱', selected: false },
  { id: 'keto', text: 'Keto', emoji: '🥑', selected: false },
  { id: 'paleo', text: 'Paleo', emoji: '🥩', selected: false },
];

export const FOOD_ALLERGIES: FoodAllergy[] = [
  { id: 'none', text: 'None', emoji: '✅', selected: false, isNone: true },
  { id: 'dairy', text: 'Dairy', emoji: '🥛', selected: false },
  { id: 'nuts', text: 'Nuts', emoji: '🥜', selected: false },
  { id: 'shellfish', text: 'Shellfish', emoji: '🦐', selected: false },
  { id: 'eggs', text: 'Eggs', emoji: '🥚', selected: false },
  { id: 'soy', text: 'Soy', emoji: '🫘', selected: false },
  { id: 'wheat', text: 'Wheat', emoji: '🌾', selected: false },
];

export const PROGRAM_SUCCESS: ProgramSuccess[] = [
  { id: 'weight-loss', text: 'Weight Loss', emoji: '⚖️', selected: false },
  { id: 'strength', text: 'Strength Gain', emoji: '💪', selected: false },
  { id: 'endurance', text: 'Endurance', emoji: '🏃', selected: false },
  { id: 'flexibility', text: 'Flexibility', emoji: '🧘', selected: false },
  { id: 'energy', text: 'Energy Levels', emoji: '⚡', selected: false },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: '3-month',
    duration: '3 months',
    originalPrice: 297,
    discountedPrice: 197,
    perDay: 3.30,
    discountedPerDay: 2.20,
    isPopular: false,
    hasGift: false,
  },
  {
    id: '6-month',
    duration: '6 months',
    originalPrice: 594,
    discountedPrice: 297,
    perDay: 3.30,
    discountedPerDay: 1.65,
    isPopular: true,
    hasGift: true,
  },
  {
    id: '12-month',
    duration: '12 months',
    originalPrice: 1188,
    discountedPrice: 497,
    perDay: 3.30,
    discountedPerDay: 1.38,
    isPopular: false,
    hasGift: true,
  },
];

export const WORKOUT_PREFERENCES: WorkoutPreference[] = [
  { id: 'cardio', text: 'Cardio', emoji: '🏃', selected: false },
  { id: 'strength', text: 'Strength Training', emoji: '💪', selected: false },
  { id: 'flexibility', text: 'Flexibility', emoji: '🧘', selected: false },
  { id: 'hiit', text: 'HIIT', emoji: '⚡', selected: false },
  { id: 'yoga', text: 'Yoga', emoji: '🧘‍♀️', selected: false },
  { id: 'pilates', text: 'Pilates', emoji: '🧘‍♂️', selected: false },
  { id: 'dance', text: 'Dance', emoji: '💃', selected: false },
  { id: 'sports', text: 'Sports', emoji: '⚽', selected: false },
];

export const HEALTH_RESTRICTIONS: HealthRestriction[] = [
  { id: 'none', text: 'None', emoji: '✅', selected: false },
  { id: 'back-pain', text: 'Back Pain', emoji: '🔄', selected: false },
  { id: 'joint-pain', text: 'Joint Pain', emoji: '🦴', selected: false },
  { id: 'heart-condition', text: 'Heart Condition', emoji: '❤️', selected: false },
  { id: 'diabetes', text: 'Diabetes', emoji: '🩸', selected: false },
  { id: 'asthma', text: 'Asthma', emoji: '🌬️', selected: false },
  { id: 'arthritis', text: 'Arthritis', emoji: '🦴', selected: false },
  { id: 'other', text: 'Other', emoji: '⚠️', selected: false },
]; 