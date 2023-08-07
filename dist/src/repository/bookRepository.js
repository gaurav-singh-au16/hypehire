"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRepository = void 0;
const bookEntity_1 = require("../entity/bookEntity");
const books = [];
class BookRepository {
    static getAllBooks() {
        let getBook = bookEntity_1.BookEntity.findAll({
            attributes: ["id", "title", "description", "discountRate", "price", "discountRate"]
        });
        return getBook;
    }
    static getBookById(id) {
        let getBook = bookEntity_1.BookEntity.findOne({
            where: {
                id: id
            },
            attributes: ["id", "title", "description", "discountRate", "price", "discountRate"]
        });
        return getBook;
    }
    static addNewBook(bookData) {
        let res = bookEntity_1.BookEntity.create({
            title: bookData.title,
            description: bookData.description,
            discountRate: bookData.discountRate,
            price: bookData.price,
            coverImage: bookData.coverImage
        });
        return { success: true, data: res };
    }
}
exports.BookRepository = BookRepository;
//# sourceMappingURL=bookRepository.js.map