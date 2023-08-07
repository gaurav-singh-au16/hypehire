"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const bookRepository_1 = require("../repository/bookRepository");
class BookService {
    static getAllBooks() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield bookRepository_1.BookRepository.getAllBooks();
        });
    }
    static getBookById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield bookRepository_1.BookRepository.getBookById(id);
        });
    }
    static addNewBook(bookData) {
        return __awaiter(this, void 0, void 0, function* () {
            function isDiscountRateValid(discountRate) {
                return discountRate >= 1 && discountRate <= 99;
            }
            if (!bookData.title) {
                return { success: false, message: 'title Not Present' };
            }
            else if (!bookData.description) {
                return { success: false, message: 'description Not Present' };
            }
            else if (!bookData.discountRate) {
                return { success: false, message: 'Discount Rate Not Present' };
            }
            else if (!isDiscountRateValid(bookData.discountRate)) {
                return { success: false, message: 'Discount Rate Not Valid Must Be Inbetween 1-99' };
            }
            else if (!bookData.price) {
                return { success: false, message: 'Price Not Present' };
            }
            else {
                return bookRepository_1.BookRepository.addNewBook(bookData);
            }
        });
    }
}
exports.BookService = BookService;
//# sourceMappingURL=bookService.js.map