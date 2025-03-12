export default function paintRequiredCalculator(
  area: any,
  coveragePerLiter: any
): number {
  if (isNaN(Number(area)) || isNaN(Number(coveragePerLiter))) {
    throw new Error(
      "Invalid input: Area and coverage per liter must be numbers"
    );
  }
  if (area < 0 || coveragePerLiter <= 0) {
    throw new Error(
      "Invalid input: Area and coverage per liter must be positive"
    );
  }
  return area / coveragePerLiter;
}
