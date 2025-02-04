"use client";
import { useState } from "react";
import { add } from "@/utils/stringCalculator";

const StringCalculator = () => {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<number | string>(0);

  const handleCalculate = () => {
    try {
      setOutput(add(input));
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error?.message);
      } else {
        console.error("An unexpected error occurred:", error);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-5 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-5">String Calculator</h1>
      <input
        data-testid="input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="p-2 border rounded w-96"
        placeholder="Enter numbers..."
      />
      <button
        data-testid="button"
        onClick={handleCalculate}
        className="bg-blue-500 px-4 py-2 text-white mt-2 rounded"
      >
        Calculate
      </button>
      <p className="mt-4 text-xl">{`Output: ${output}`}</p>
    </div>
  );
};
export default StringCalculator;
