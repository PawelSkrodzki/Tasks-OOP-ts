function checkIsStringEmpty(input: string): void {
  const isNotEmptyInput = input.length !== 0;

  if (!isNotEmptyInput) {
    throw new Error(`value can not be empty`);
  }
}

// function throwErrorIsClassIsNotSameInstance(element, classType) {
//   if (!(element instanceof classType)) {
//     throw new Error(`${element} is not instanceof class ${classType}`);
//   }
// }

export { checkIsStringEmpty };
