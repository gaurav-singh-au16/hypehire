import { BookEntity } from "../entity/bookEntity";

const books: BookEntity[] = [];

export class BookRepository {
  static getAllBooks() {
    return books;
  }

  static getBookById(id) {
    return books.find((book) => book.id === id);
  }
}