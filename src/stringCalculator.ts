export const add = (str: string) => {
  if (str === "") return 0;
  const sum = str.split("").map(Number).reduce((a, b) => a + b, 0);
  return sum || null;
};
