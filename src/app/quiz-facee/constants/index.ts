import { Goal, Experience, BodyType, TimeOption, TargetBodyType, TargetZone, ActivityLevel, MedicalCondition, WeeklyFrequency, SessionDuration, Capability, CoachCapability, SleepDuration, WaterIntake, WalkingTime, MenopauseStatus, DietType, FoodAllergy, ProgramSuccess, PricingPlan } from '../types';

export const GOALS: Goal[] = [
  {
    id: 'weight-loss',
    text: 'Weight Loss',
    image: '/images/goals/weight-loss.svg',
    selected: false,
  },
  {
    id: 'muscle-gain',
    text: 'Muscle Gain',
    image: '/images/goals/muscle-gain.svg',
    selected: false,
  },
  {
    id: 'tone-up',
    text: 'Tone Up',
    image: '/images/goals/tone-up.svg',
    selected: false,
  },
  {
    id: 'flexibility',
    text: 'Flexibility',
    image: '/images/goals/flexibility.svg',
    selected: false,
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'beginner',
    text: 'Beginner',
    emoji: '🌱',
    selected: false,
  },
  {
    id: 'intermediate',
    text: 'Intermediate',
    emoji: '🌿',
    selected: false,
  },
  {
    id: 'advanced',
    text: 'Advanced',
    emoji: '🌳',
    selected: false,
  },
];

export const BODY_TYPES: BodyType[] = [
  {
    id: 'ectomorph',
    text: 'Ectomorph',
    image: '/images/body-types/ectomorph.svg',
  },
  {
    id: 'mesomorph',
    text: 'Mesomorph',
    image: '/images/body-types/mesomorph.svg',
  },
  {
    id: 'endomorph',
    text: 'Endomorph',
    image: '/images/body-types/endomorph.svg',
  },
];

export const TIME_OPTIONS: TimeOption[] = [
  {
    id: 'morning',
    text: 'Morning',
    emoji: '🌅',
  },
  {
    id: 'afternoon',
    text: 'Afternoon',
    emoji: '☀️',
  },
  {
    id: 'evening',
    text: 'Evening',
    emoji: '🌙',
  },
];

export const TARGET_BODY_TYPES: TargetBodyType[] = [
  {
    id: 'lean',
    text: 'Lean',
    image: '/images/target-body-types/lean.svg',
  },
  {
    id: 'athletic',
    text: 'Athletic',
    image: '/images/target-body-types/athletic.svg',
  },
  {
    id: 'curvy',
    text: 'Curvy',
    image: '/images/target-body-types/curvy.svg',
  },
];

export const TARGET_ZONES: TargetZone[] = [
  {
    id: 'whole-body',
    text: 'Whole Body',
    selected: false,
    isWholeBody: true,
  },
  {
    id: 'upper-body',
    text: 'Upper Body',
    selected: false,
  },
  {
    id: 'lower-body',
    text: 'Lower Body',
    selected: false,
  },
  {
    id: 'core',
    text: 'Core',
    selected: false,
  },
];

export const ACTIVITY_LEVELS: ActivityLevel[] = [
  {
    id: 'sedentary',
    text: 'Sedentary',
    emoji: '🛋️',
    selected: false,
  },
  {
    id: 'light',
    text: 'Light Exercise',
    emoji: '🚶',
    selected: false,
  },
  {
    id: 'moderate',
    text: 'Moderate Exercise',
    emoji: '🏃',
    selected: false,
  },
  {
    id: 'very-active',
    text: 'Very Active',
    emoji: '💪',
    selected: false,
  },
];

export const MEDICAL_CONDITIONS: MedicalCondition[] = [
  {
    id: 'none',
    text: 'None',
    image: '/images/medical-conditions/none.svg',
    selected: false,
    isNone: true,
  },
  {
    id: 'back-pain',
    text: 'Back Pain',
    image: '/images/medical-conditions/back-pain.svg',
    selected: false,
  },
  {
    id: 'joint-pain',
    text: 'Joint Pain',
    image: '/images/medical-conditions/joint-pain.svg',
    selected: false,
  },
  {
    id: 'heart-condition',
    text: 'Heart Condition',
    image: '/images/medical-conditions/heart-condition.svg',
    selected: false,
  },
];

export const WEEKLY_FREQUENCIES: WeeklyFrequency[] = [
  {
    id: '3-times',
    text: '3 times per week',
    emoji: '📅',
    selected: false,
  },
  {
    id: '4-times',
    text: '4 times per week',
    emoji: '📅',
    selected: false,
  },
  {
    id: '5-times',
    text: '5 times per week',
    emoji: '📅',
    selected: false,
  },
];

export const SESSION_DURATIONS: SessionDuration[] = [
  {
    id: '30-minutes',
    text: '30 minutes',
    emoji: '⏱️',
    selected: false,
  },
  {
    id: '45-minutes',
    text: '45 minutes',
    emoji: '⏱️',
    selected: false,
  },
  {
    id: '60-minutes',
    text: '60 minutes',
    emoji: '⏱️',
    selected: false,
  },
];

export const CAPABILITIES: Capability[] = [
  {
    id: 'strength',
    text: 'Strength',
    emoji: '💪',
    selected: false,
  },
  {
    id: 'flexibility',
    text: 'Flexibility',
    emoji: '🧘',
    selected: false,
  },
  {
    id: 'balance',
    text: 'Balance',
    emoji: '⚖️',
    selected: false,
  },
];

export const COACH_CAPABILITIES: CoachCapability[] = [
  {
    id: 'personal-trainer',
    text: 'Personal Trainer',
    emoji: '👨‍🏫',
    selected: false,
  },
  {
    id: 'nutritionist',
    text: 'Nutritionist',
    emoji: '🥗',
    selected: false,
  },
  {
    id: 'yoga-instructor',
    text: 'Yoga Instructor',
    emoji: '🧘',
    selected: false,
  },
];

export const SLEEP_DURATIONS: SleepDuration[] = [
  {
    id: 'less-than-6',
    text: 'Less than 6 hours',
    emoji: '😴',
    selected: false,
  },
  {
    id: '6-to-8',
    text: '6-8 hours',
    emoji: '😴',
    selected: false,
  },
  {
    id: 'more-than-8',
    text: 'More than 8 hours',
    emoji: '😴',
    selected: false,
  },
];

export const WATER_INTAKES: WaterIntake[] = [
  {
    id: 'less-than-2',
    text: 'Less than 2L',
    emoji: '💧',
    selected: false,
  },
  {
    id: '2-to-3',
    text: '2-3L',
    emoji: '💧',
    selected: false,
  },
  {
    id: 'more-than-3',
    text: 'More than 3L',
    emoji: '💧',
    selected: false,
  },
];

export const WALKING_TIMES: WalkingTime[] = [
  {
    id: 'less-than-30',
    text: 'Less than 30 minutes',
    emoji: '🚶',
    selected: false,
  },
  {
    id: '30-to-60',
    text: '30-60 minutes',
    emoji: '🚶',
    selected: false,
  },
  {
    id: 'more-than-60',
    text: 'More than 60 minutes',
    emoji: '🚶',
    selected: false,
  },
];

export const MENOPAUSE_STATUSES: MenopauseStatus[] = [
  {
    id: 'pre-menopause',
    text: 'Pre-menopause',
    emoji: '🌸',
    selected: false,
  },
  {
    id: 'perimenopause',
    text: 'Perimenopause',
    emoji: '🌺',
    selected: false,
  },
  {
    id: 'post-menopause',
    text: 'Post-menopause',
    emoji: '🌹',
    selected: false,
  },
];

export const DIET_TYPES: DietType[] = [
  {
    id: 'omnivore',
    text: 'Omnivore',
    emoji: '🍖',
    selected: false,
  },
  {
    id: 'vegetarian',
    text: 'Vegetarian',
    emoji: '🥬',
    selected: false,
  },
  {
    id: 'vegan',
    text: 'Vegan',
    emoji: '🌱',
    selected: false,
  },
];

export const FOOD_ALLERGIES: FoodAllergy[] = [
  {
    id: 'none',
    text: 'None',
    emoji: '✅',
    selected: false,
    isNone: true,
  },
  {
    id: 'dairy',
    text: 'Dairy',
    emoji: '🥛',
    selected: false,
  },
  {
    id: 'nuts',
    text: 'Nuts',
    emoji: '🥜',
    selected: false,
  },
  {
    id: 'shellfish',
    text: 'Shellfish',
    emoji: '🦐',
    selected: false,
  },
];

export const PROGRAM_SUCCESS: ProgramSuccess[] = [
  {
    id: 'weight-loss',
    text: 'Weight Loss',
    emoji: '⚖️',
    selected: false,
  },
  {
    id: 'strength',
    text: 'Strength',
    emoji: '💪',
    selected: false,
  },
  {
    id: 'flexibility',
    text: 'Flexibility',
    emoji: '🧘',
    selected: false,
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: '3-months',
    duration: '3 months',
    originalPrice: 297,
    discountedPrice: 197,
    perDay: 3.30,
    discountedPerDay: 2.20,
  },
  {
    id: '6-months',
    duration: '6 months',
    originalPrice: 594,
    discountedPrice: 294,
    perDay: 3.30,
    discountedPerDay: 1.60,
    isPopular: true,
    hasGift: true,
  },
  {
    id: '12-months',
    duration: '12 months',
    originalPrice: 1188,
    discountedPrice: 388,
    perDay: 3.30,
    discountedPerDay: 1.10,
    hasGift: true,
  },
]; 