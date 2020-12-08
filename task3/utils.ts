import isJs from 'is_js';
import moment from 'moment';
import { IUser } from './User';

function validatePassword(inputPassword: string): void {
  const pattern = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})');

  if (!pattern.test(inputPassword)) {
    throw new Error('Password should contain min 8 signs, 1 big letter, one number and one special sign');
  }
}

function validateBirthday(input: string): string {
  const isCorrectDate = moment(input, 'DD/MM/YYYY').format();

  if (isCorrectDate === 'Invalid date') {
    throw new Error('incorrect date');
  }

  return isCorrectDate;
}

function validateEmail(inputEmail: string): void {
  if (!isJs.email(inputEmail)) {
    throw new Error('Email shoud be email@test.com');
  }
}

function isUserExistInAppList(user: IUser, appList: IUser[]): boolean {
  return appList.includes(user);
}

export { validatePassword, validateBirthday, validateEmail, isUserExistInAppList };
