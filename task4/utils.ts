interface IID {
  id: string;
}

function validateEmail(inputEmail: string): boolean {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const isEmailCorrect = re.test(String(inputEmail).toLowerCase());

  if (!isEmailCorrect) {
    throw new Error('Wrong type of email, should be something@something.com');
  }
  return isEmailCorrect;
}

function isElementExistInArray<T>(key: T, array: T[]): boolean {
  const isElementExist = !array.includes(key);
  return isElementExist;
}

function isKeyExistInArray(key: string, array: string[]): boolean {
  const smallArray = array.map((el) => el.toLowerCase());
  const smallKey = key.toLowerCase();
  const isInvalidKey = !smallArray.includes(smallKey);
  return isInvalidKey;
}

function removeElementFromArray<T extends IID>(array: T[], elementToRemove: T): void {
  const foundElement = array.findIndex((el) => el.id === elementToRemove.id);
  if (foundElement === -1) {
    throw new Error('ElementToRemove does not exist in array, so you can not delete it');
  }

  array.splice(foundElement, 1);
}

export { removeElementFromArray, isKeyExistInArray, isElementExistInArray, validateEmail };
