export const convertImperialToMetric = (ft: string, inches: string): string => {
  const totalInches = parseInt(ft) * 12 + parseInt(inches);
  const cm = Math.round(totalInches * 2.54);
  return cm.toString();
};

export const convertMetricToImperial = (cm: string): { ft: string; inches: string } => {
  const totalInches = Math.round(parseInt(cm) / 2.54);
  const ft = Math.floor(totalInches / 12);
  const inches = totalInches % 12;
  return { ft: ft.toString(), inches: inches.toString() };
};

export const convertImperialToMetricWeight = (st: string, lbs: string): string => {
  const totalLbs = parseInt(st) * 14 + parseInt(lbs);
  const kg = Math.round(totalLbs * 0.453592);
  return kg.toString();
};

export const convertMetricToImperialWeight = (kg: string): { st: string; lbs: string } => {
  const totalLbs = Math.round(parseInt(kg) / 0.453592);
  const st = Math.floor(totalLbs / 14);
  const lbs = totalLbs % 14;
  return { st: st.toString(), lbs: lbs.toString() };
};

export const calculateBMI = (weightKg: number, heightCm: number): number => {
  const heightM = heightCm / 100;
  return Number((weightKg / (heightM * heightM)).toFixed(1));
}; 