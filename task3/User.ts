import { v4 as uuid } from 'uuid';
import moment from 'moment';
import IsStringIsEmpty from './validation';
import { validatePassword, validateBirthday, validateEmail } from './utils';

type GenderType = 'male' | 'female';
type AccessLevel = 'USER' | 'ADMIN';

interface IUser {
  id: string;
  name: string;
  surname: string;
  birthday: string;
  password: string;
  gender: GenderType;
  email: string;
  accessLevel: AccessLevel;
}

class User implements IUser {
  public id: string;
  public name: string;
  public surname: string;
  public birthday: string;
  public password: string;
  public gender: GenderType;
  public email: string;
  public accessLevel: AccessLevel;

  constructor(
    name: string,
    surname: string,
    birthday: string,
    password: string,
    gender: GenderType,
    email: string,
    accessLevel: AccessLevel
  ) {
    IsStringIsEmpty(name);
    IsStringIsEmpty(surname);
    validateBirthday(birthday);
    validatePassword(password);
    IsStringIsEmpty(gender);
    validateEmail(email);
    IsStringIsEmpty(accessLevel);

    this.id = uuid();
    this.name = name;
    this.surname = surname;
    this.birthday = moment(birthday, 'DD/MM/YYYY').format('l');
    this.password = password;
    this.gender = gender;
    this.email = email;
    this.accessLevel = accessLevel;
  }
}

export { User, IUser, AccessLevel };
