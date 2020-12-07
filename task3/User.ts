import { v4 as uuid } from 'uuid';
import moment from 'moment';
import IsStringEmpty from './validation';
import { validatePassword, validateBirthday, validateEmail } from './utils';

type GenderType = 'male' | 'female';
type AccessLevel = 'USER' | 'ADMIN';

interface IUser {
  name: string;
  surname: string;
  birthday: string;
  password: string;
  gender: GenderType;
  email: string;
  accessLevel: AccessLevel;
}

class User implements IUser {
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
    IsStringEmpty(name);
    IsStringEmpty(surname);
    validateBirthday(birthday);
    validatePassword(password);
    IsStringEmpty(gender);
    validateEmail(email);
    IsStringEmpty(accessLevel);

    this.name = name;
    this.surname = surname;
    this.birthday = birthday;
    this.password = password;
    this.gender = gender;
    this.email = email;
    this.accessLevel = accessLevel;

    Object.assign(this, {
      id: uuid(),
      name,
      surname,
      birthday: moment(birthday, 'DD/MM/YYYY').format('l'),
      password,
      gender,
      email,
      accessLevel: accessLevel.toUpperCase()
    });
  }
}

export { User, IUser, AccessLevel };
