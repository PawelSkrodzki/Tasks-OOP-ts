import * as isJs from 'is_js';

function validateString(input: string) {
  if (isJs.empty(input)) {
    throw new Error(`string is empty`);
  }
}

export default validateString;
