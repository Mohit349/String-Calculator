export function add(numbers: string): number | string {
  if (!numbers) return 0;
  numbers = numbers.replace(/\\n/g, "\n");
  let delimeter = /,|\n/;
  const numArray = numbers.split(delimeter).map((one) => Number(one));
  const negativeNumsArray = numArray.filter((num) => num < 0);
  if (negativeNumsArray?.length) {
    throw new Error(
      `Negative numbers not allowed: ${negativeNumsArray.join(", ")}`
    );
  }
  return numArray.reduce((sum, n) => sum + n, 0);
}
