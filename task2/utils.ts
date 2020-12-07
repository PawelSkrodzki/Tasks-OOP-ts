const findWrapperFunction = (elementToCompare) => (elementIteratable) => {
    return elementToCompare.id === elementIteratable.id
}

function isElementExistInArray(key, array) {
    const smallArray = array.map(el => el.toLowerCase());
    const smallKey = key.toLowerCase();
    const isInvalidKey = !smallArray.includes(smallKey);
    return isInvalidKey
}

export {
    findWrapperFunction,
    isElementExistInArray
}