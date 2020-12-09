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
  rentedBook: IBook;
  addBook(book: IBook): void;
  removeBook(book: IBook): void;
}

class Booking implements IBooking {
  public id: string;
  public user: IUser;
  public dateOfRent: Date;
  public dateOfExpectedReturn: Date;
  public fee: number;
  public rentedBook: IBook = {} as IBook;

  constructor(user: User) {
    this.id = uuid();
    this.user = user;
    this.dateOfRent = new Date();
    this.dateOfExpectedReturn = new Date(Date.now() + sevenDays);
    this.fee = 0;
  }

  addBook(book: IBook): void {
    this.rentedBook = book;
  }

  removeBook(book: IBook): void {
    const dateOfReturn: Date = new Date();
    if (this.rentedBook !== book) {
      throw new Error('Book does not exist in booking');
    }

    if (this.dateOfExpectedReturn.getTime() < dateOfReturn.getTime()) {
      const differenceInTime = dateOfReturn.getTime() - this.dateOfExpectedReturn.getTime();
      const oneDayMilliseconds = 1000 * 3600 * 24;
      const differenceDays = Math.round(differenceInTime / oneDayMilliseconds);
      this.fee = differenceDays * penaltyPerDay;
      this.rentedBook = {} as IBook;
      console.log(`You have to pay ${Math.round(this.fee)}`);
    }
    this.rentedBook = {} as IBook;
  }
}

export { Booking, IBooking };
