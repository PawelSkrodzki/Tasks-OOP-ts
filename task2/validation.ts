function isNotNan(value: number): void {
  const inputIsNumber = !Number.isNaN(Number(value));
  if (!inputIsNumber) {
    throw new Error(`value should be number, but you passed ${value} which is type ${typeof value}`);
  }
}

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

export { isStringIsEmpty, isNotNan, isPositiveNumber };
