function validateNumber(value, inputName = '') {
  const inputIsNumber = typeof value === 'number' && !Number.isNaN(Number(value));
  if (!inputIsNumber) {
    throw new Error(`value prop ${inputName} should be number, but you passed ${value} which is type ${typeof value}`);
  }
}

function validateString(value: string): void {
  const isInputEmpty = value.length !== 0;

  if (!isInputEmpty) {
    throw new Error(`String cannot be empty`);
  }
}

function isPositiveNumber(value) {
  if (!(typeof value === 'number' && !Number.isNaN(Number(value)) && value > 0)) {
    throw new Error('Value shoudl be positive number');
  }
}

function throwErrorIsClassIsNotSameInstance(element, classType) {
  if (!(element instanceof classType)) {
    throw new Error(`${element} is not instanceof class ${classType}`);
  }
}

export { validateString, validateNumber, isPositiveNumber, throwErrorIsClassIsNotSameInstance };
