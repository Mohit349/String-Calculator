export function add(numbers: string): number | string {
  if (!numbers) return 0;
  numbers = numbers.replace(/\\n/g, "\n");
  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    const delimiterSection = numbers.match(/^\/\/(.+)\n/);
    if (delimiterSection) {
      const delimiterPart = delimiterSection[1];
      // Handled multiple delimiters of any length: "//[***][%%%]\n1***2%%%3"
      const delimiters = delimiterPart.match(/\[([^\]]+)\]/g);
      if (delimiters?.length) {
        delimiter = new RegExp(
          delimiters
            .map((d) => d.slice(1, -1).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
            .join("|")
        );
      } else {
        delimiter = new RegExp(delimiterPart); // Single custom delimiter
      }

      numbers = numbers.split("\n")[1];
    }
  }
  const numArray = numbers.split(delimiter).map((one) => Number(one));
  const negativeNumsArray = numArray.filter((num) => num < 0);
  if (negativeNumsArray?.length) {
    throw new Error(
      `Negative numbers not allowed: ${negativeNumsArray.join(", ")}`
    );
  }
  return numArray.filter((n) => n <= 1000).reduce((sum, n) => sum + n, 0);
}
