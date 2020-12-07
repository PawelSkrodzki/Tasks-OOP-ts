import { v4 as uuid } from 'uuid';
import { checkIsStringEmpty } from './validation';
import { validateEmail } from './utils';

interface IUser {
  email: string;
  id: string;
  name: string;
  surname: string;
}

class User implements IUser {
  id = uuid();
  name: string;
  surname: string;
  email: string;
  constructor(name: string, surname: string, email: string) {
    checkIsStringEmpty(name);
    checkIsStringEmpty(surname);
    validateEmail(email);

    this.name = name;
    this.surname = surname;
    this.email = email;
  }
}

export { User, IUser };
