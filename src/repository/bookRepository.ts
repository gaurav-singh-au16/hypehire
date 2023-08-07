import { BookEntity } from "../entity/bookEntity";

const books: BookEntity[] = [];

export class BookRepository {
  static getAllBooks() {
    let getBook = BookEntity.findAll({
      attributes: ["id", "title", "description", "discountRate", "price", "discountRate"]
    })
    return getBook;
  }

  static getBookById(id: number) {
    let getBook = BookEntity.findOne({
      where: {
        id: id
      },
      attributes: ["id", "title", "description", "discountRate", "price", "discountRate"]
    })
    return getBook
  }

  static addNewBook(bookData: { title: string; description: string; discountRate: number; price: number; coverImage: string; }) {
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