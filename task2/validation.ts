function isStringIsEmpty(value: string): void {
  const isInputEmpty = value.length !== 0;

  if (!isInputEmpty) {
    throw new Error(`String cannot be empty`);
  }
}

function isPositiveNumber(value: number): void {
  if (!(!Number.isNaN(Number(value)) && value > 0)) {
    throw new Error('Value shoudl be positive number');
  }
}

function isPositiveNumberAndInRange(value: number): void {
  if (!(!Number.isNaN(Number(value)) && value > 0 && value <= 100)) {
    throw new Error('Value should be positive number in range from 1 to 100');
  }
}

export { isStringIsEmpty, isPositiveNumber, isPositiveNumberAndInRange };
