import paintRequiredCalculator from "./paintRequiredCalculator";

describe("paintRequiredCalculator", () => {
  test("should return expected result", () => {
    const result = paintRequiredCalculator(50, 10);
    expect(result).toEqual(5);
  });

  // Adding missing test cases
  test("should return 0 if area is 0", () => {
    expect(paintRequiredCalculator(0, 10)).toBe(0);
  });

  test("should return 0 if coverage per liter is extremely high", () => {
    expect(paintRequiredCalculator(50, 1_000_000)).toBeCloseTo(0);
  });

  test("should throw an error for negative values", () => {
    expect(() => paintRequiredCalculator(-50, 10)).toThrow("Invalid input");
    expect(() => paintRequiredCalculator(50, -10)).toThrow("Invalid input");
  });

  test("should handle non-numeric input gracefully", () => {
    expect(() => paintRequiredCalculator("abc" as any, 10)).toThrow(
      "Invalid input"
    );
    expect(() => paintRequiredCalculator(50, "xyz" as any)).toThrow(
      "Invalid input"
    );
  });
});
