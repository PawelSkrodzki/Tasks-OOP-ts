import { v4 as uuid } from 'uuid';
import { checkIsStringEmpty } from './validation';

interface IBook {
  id: string;
  img: string;
  title: string;
  author: string;
  description: string;
}

class Book implements IBook {
  public id: string;
  public img: string;
  public title: string;
  public author: string;
  public description: string;

  constructor(title: string, author: string, description: string) {
    checkIsStringEmpty(title);
    checkIsStringEmpty(author);
    checkIsStringEmpty(description);
    this.id = uuid();
    this.img = `https://picsum.photos/200/300`;
    this.title = title;
    this.author = author;
    this.description = description;
  }
}

export { Book, IBook };
