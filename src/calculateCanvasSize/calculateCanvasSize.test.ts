import calculateCanvasSize from "./calculateCanvasSize";

describe("calculateCanvasSize", () => {
  test("returns correct result", () => {
    const result = calculateCanvasSize("10", "100");
    expect(result).toEqual(1000);
  });

  // Adding missing test cases
  test.todo("should return 0 if any input is '0'");
  test.todo("should handle non-numeric input gracefully");
  test.todo("should throw an error for missing inputs");
});
