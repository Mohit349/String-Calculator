import "@testing-library/jest-dom";
import { add } from "@/utils/stringCalculator";

describe("String Calculator", () => {
  it("empty string should return 0", () => {
    expect(add("")).toBe(0);
  });

  it("should return the number itself if only one number is provided", () => {
    expect(add("5")).toBe(5);
  });

  it("should return sum of numbers if two numbers are provided", () => {
    expect(add("2,4")).toBe(6);
  });

  it("should handle multiple numbers and return their sum", () => {
    expect(add("2,1,4,3")).toBe(10);
  });

  it("should handle new lines as delimiters", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  it("should handle custom delimiters", () => {
    expect(add("//;\n1;2;3")).toBe(6);
  });

  it("should throw an error for negative numbers", () => {
    expect(() => add("1,-2,3,-4")).toThrow(
      "Negative numbers not allowed: -2, -4"
    );
  });
});
