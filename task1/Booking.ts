import { v4 as uuid } from 'uuid';
// import { throwErrorIsClassIsNotSameInstance } from './validation';
import { Book, IBook } from './Book';
import { User, IUser } from './User';

const sevenDays: number = 7 * 24 * 60 * 60 * 1000;
const penaltyPerDay: number = 5;

interface IBooking {
  id: string;
  user: IUser;
  dateOfRent: Date;
  dateOfExpectedReturn: Date;
  fee: number;
  rentedBook: object; // dlaczego Object jest interface Object? object z małej to są typy złożone, a my chcemy konkretnie Obiekt
  addBook(book: IBook): void;
  removeBook(book: IBook): string;
}

class Booking implements IBooking {
  public id = uuid();
  public user: IUser;
  public dateOfRent = new Date();
  public dateOfExpectedReturn = new Date(Date.now() + sevenDays);
  public fee: number = 0;
  public rentedBook: object = {};

  constructor(user: User) {
    this.user = user;
  }

  addBook(book: IBook): void {
    this.rentedBook = book;
  }

  removeBook(book: IBook): string {
    const dateOfReturn: Date = new Date();
    if (this.rentedBook !== book) {
      throw new Error('Book does not exist in booking');
    }

    if (this.dateOfExpectedReturn.getTime() < dateOfReturn.getTime()) {
      const differenceInTime = dateOfReturn.getTime() - this.dateOfExpectedReturn.getTime();
      const oneDayMilliseconds = 1000 * 3600 * 24;
      const differenceDays = Math.round(differenceInTime / oneDayMilliseconds);
      this.fee = differenceDays * penaltyPerDay;
      this.rentedBook = {};
      return `You have to pay ${Math.round(this.fee)}`;
    }
    this.rentedBook = {};

    return `Book has returned in time`;
  }
}

export { Booking, IBooking };
