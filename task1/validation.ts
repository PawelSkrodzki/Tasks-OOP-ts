function checkIsStringEmpty(input: string): void {
  const isNotEmptyInput = input.length !== 0;

  if (!isNotEmptyInput) {
    throw new Error(`value can not be empty`);
  }
}

export { checkIsStringEmpty };
