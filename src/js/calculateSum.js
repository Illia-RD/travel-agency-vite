// Функція для обчислення суми значень в масиві
export function calculateSum(arr) {
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}
