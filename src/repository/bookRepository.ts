import { BookEntity } from "../entity/bookEntity";

const books: BookEntity[] = [];

export class BookRepository {
  static getAllBooks() {
    return books;
  }

  static getBookById(id) {
    return books.find((book) => book.id === id);
  }

  static addNewBook(bookData) {
    let res = BookEntity.create({
        title: bookData.title,
        description: bookData.description,
        discountRate: bookData.discountRate,
        price: bookData.price,
        coverImage: bookData.coverImage
    })
    return {success: true, data: res}
}
}