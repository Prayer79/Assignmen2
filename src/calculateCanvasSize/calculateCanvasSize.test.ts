import calculateCanvasSize from "./calculateCanvasSize";

describe("calculateCanvasSize", () => {
  test("returns correct result", () => {
    const result = calculateCanvasSize("10", "100");
    expect(result).toEqual(1000);
  });

  // Adding missing test cases
  test("should return 0 if any input is '0'", () => {
    expect(calculateCanvasSize("0", "50")).toBe(0);
    expect(calculateCanvasSize("50", "0")).toBe(0);
  });

  test("should handle non-numeric input gracefully", () => {
    expect(() => calculateCanvasSize("abc", "10")).toThrow("Invalid input");
    expect(() => calculateCanvasSize("10", "xyz")).toThrow("Invalid input");
  });

  test("should throw an error for missing inputs", () => {
    expect(() => calculateCanvasSize("10")).toThrow("Missing input");
    expect(() => calculateCanvasSize()).toThrow("Missing input");
  });
});
