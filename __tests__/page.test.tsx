import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import StringCalculator from "@/app/page";

describe("String Calculator Component", () => {
  it("renders input box and calculate button", () => {
    render(<StringCalculator />);

    const inputBox = screen.getByPlaceholderText("Enter numbers...");
    expect(inputBox).toBeInTheDocument();

    const calculateButton = screen.getByText("Calculate");
    expect(calculateButton).toBeInTheDocument();
  });

  it("calculate sum when calculate button is clicked", () => {
    render(<StringCalculator />);
    const inputBox = screen.getByTestId("input");
    const calculateButton = screen.getByTestId("button");
    fireEvent.change(inputBox, { target: { value: "1,4" } });
    fireEvent.click(calculateButton);
    expect(screen.getByText("Output: 5")).toBeInTheDocument();
  });
});
