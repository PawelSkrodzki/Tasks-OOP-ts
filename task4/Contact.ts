import { v4 as uuid } from 'uuid';
import { isStringIsEmpty } from './validation';
import { validateEmail, isKeyExistInArray } from './utils';

interface IContact {
  id: string;
  date: Date;
  name: string;
  surname: string;
  email: string;
}

class Contact implements IContact {
  public id: string;
  public date: Date;
  public name: string;
  public surname: string;
  public email: string;

  constructor(name, surname, email) {
    isStringIsEmpty(name);
    isStringIsEmpty(surname);
    validateEmail(email);
    this.id = uuid();
    this.date = new Date();
    this.name = name;
    this.surname = surname;
    this.email = email;
  }

  readData() {
    return {
      id: this.id,
      date: this.date.toString(),
      name: this.name.toLowerCase(),
      surname: this.surname.toLowerCase(),
      email: this.email
    };
  }

  update(key: string, value: string): string {
    isStringIsEmpty(key);
    isStringIsEmpty(value);
    if (isKeyExistInArray(key, ['name', 'surname', 'email'])) {
      throw new Error('Key does not exist in avaliableKeys');
    }
    const smallKey = key.toLowerCase();
    if (smallKey === 'email') {
      validateEmail(value);
    }
    this[smallKey] = value;
    return 'Contact was updated';
  }

  contains(phrase: string): boolean {
    isStringIsEmpty(phrase);
    const allValues = Object.values(this.readData());
    const lowerPhrase = phrase.toLowerCase();

    if (allValues.some((el) => el.toLowerCase().includes(lowerPhrase))) {
      return true;
    }
    return false;
  }
}

export { Contact, IContact };
