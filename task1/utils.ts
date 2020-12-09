interface withId {
  id: string;
}

function isElementExistInArray<T extends withId>(element: T, array: T[]): boolean {
  const results = array.filter(function (item) {
    return item.id === element.id;
  });
  return results.length !== 0;
}

function validateEmail(inputEmail: string): boolean {
  const regExpEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const isEmailCorrect = regExpEmail.test(String(inputEmail).toLowerCase());

  if (!isEmailCorrect) {
    throw new Error('Wrong type of email, should be something@something.com');
  }
  return isEmailCorrect;
}

export { validateEmail, isElementExistInArray };
