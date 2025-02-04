import "@testing-library/jest-dom";
import { add } from "@/utils/stringCalculator";

describe("String Calculator", () => {
  it("empty string should return 0", () => {
    expect(add("")).toBe(0);
  });
});
