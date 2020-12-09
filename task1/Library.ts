// import { throwErrorIsClassIsNotSameInstance } from './validation';
import { isElementExistInArray } from './utils';
import { checkIsStringEmpty } from './validation';
import { User, IUser } from './User';
import { Book, IBook } from './Book';
import { IBooking, Booking } from './Booking';

interface ILibrary {
  name: string;
  books: IBook[];
  rentedBooks: IBook[];
  activeBookings: IBooking[];
  users: IUser[];
  addUserToLibrary(user: IUser): void;
  addBookToLibrary(book: IBook): void;
  deleteBookFromLibrary(book: IBook): void;
  rentBookForUser(user: User, book: Book): void;
  returnBookForUser(user: User, book: Book): void;
}

class Library implements ILibrary {
  public name: string;
  public books: IBook[] = [];
  public rentedBooks: IBook[] = [];
  public activeBookings: IBooking[] = [];
  public users: IUser[] = [];

  constructor(name: string) {
    checkIsStringEmpty(name);
    this.name = name;
  }

  addUserToLibrary(user: IUser): void {
    if (isElementExistInArray(user, this.users)) {
      throw new Error(`${user} is already in library`);
    }
    this.users.push(user);
  }

  addBookToLibrary(book: IBook): void {
    if (isElementExistInArray(book, this.books)) {
      throw new Error(`${book} is already in library`);
    }
    this.books.push(book);
  }

  deleteBookFromLibrary(book: IBook): void {
    if (isElementExistInArray(book, this.rentedBooks)) {
      throw new Error(`${book} is rented so you can not delate it`);
    }

    const foundBook = this.books.findIndex((el) => el.id === book.id);
    if (foundBook === -1) {
      throw new Error(`${book} does not exist, so you can not delete it`);
    }

    this.books.splice(foundBook, 1);
  }

  rentBookForUser(user: IUser, book: IBook): void {
    if (isElementExistInArray(book, this.rentedBooks)) {
      throw new Error(`HI ${book} is already been rented`);
    }

    const foundBook = this.books.findIndex((el) => el.id === book.id);
    if (foundBook === -1) {
      throw new Error(`${book} does not exist, so you can not rent it`);
    }

    this.books.splice(foundBook, 1);

    const booking = new Booking(user);

    booking.addBook(book);

    this.activeBookings.push(booking);
    this.rentedBooks.push(book);
  }

  returnBookForUser(user: IUser, book: IBook): void {
    const foundBookingIndex = this.activeBookings.findIndex((el) => el.id === user.id);
    if (foundBookingIndex === -1) {
      throw new Error('Booking does not exist');
    }

    this.activeBookings[foundBookingIndex].removeBook(book);

    this.activeBookings.splice(foundBookingIndex, 1);

    const foundBook = this.rentedBooks.findIndex((el) => el.id === book.id);

    this.rentedBooks.splice(foundBook, 1);

    this.books.push(book);
  }
}

export default Library;
