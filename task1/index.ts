import { Book } from './Book';
import { Booking } from './Booking';
import { User } from './User';
import Library from './Library';

function main() {
  // LOGI for class BOOOK
  const book1 = new Book('ss', 'Pawel Skrodz', 'Policja 997');
  const book2 = new Book('Stasiek Football', 'Krzychu Stan', 'Weszlopolscy');
  // const book2 = new Book('Ola', 'Pies', "Tralala");

  // Logi for class user
  const user1 = new User('Adam', 'Abacki', 'adam.abacki@gmail.com');
  const user2 = new User('Mateusz', 'Zawadbacki', 'ZAWADA.abacki@gmail.com');

  // LOGI for class BOOKING
  // const booked1 = new Booking(user1);
  // console.log(booked1)

  // LOGI for class Library
  // Inicjalisation
  const biblioteka = new Library('bb');

  // adding
  biblioteka.addUserToLibrary(user1);
  biblioteka.addBookToLibrary(book1);
  biblioteka.addBookToLibrary(book2);

  // deleting
  biblioteka.deleteBookFromLibrary(book1);

  biblioteka.rentBookForUser(user1, book2);
  console.log(biblioteka);
  // biblioteka.returnBookForUser(user1, book2);
  // console.log(biblioteka)

  // console.log(biblioteka);

  // rentBook
  // biblioteka.rentBook(book1,user1);

  // biblioteka.rentBook(book1, user1)
  // biblioteka.rentBook(book2, user1)
  // console.log(biblioteka.returnBook(book1, user1))
}

export default main;
