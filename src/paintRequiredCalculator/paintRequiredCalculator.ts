export default function paintRequiredCalculator(
  area: number,
  coveragePerLiter: number
): number {
  if (area < 0 || coveragePerLiter <= 0) {
    throw new Error(
      "Invalid input: Area and coverage per liter must be positive"
    );
  }
  return area / coveragePerLiter;
}
