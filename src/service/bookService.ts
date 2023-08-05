import { BookRepository } from '../repository/bookRepository';

export class BookService {

  static async getAllBooks() {
    return await BookRepository.getAllBooks();
  }

  static async getBookById(id: Number) {
    return await BookRepository.getBookById(id);
  }

}
