const findWrapperFunction = (elementToCompare) => (elementIteratable) => {
  return elementToCompare.id === elementIteratable.id;
};

function isElementExistInArray(key: string, array: string[]): boolean {
  const smallArray = array.map((el: string) => el.toLowerCase());
  const smallKey = key.toLowerCase();
  const isInvalidKey = !smallArray.includes(smallKey);
  return isInvalidKey;
}

export { findWrapperFunction, isElementExistInArray };
