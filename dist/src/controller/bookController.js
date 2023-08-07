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
exports.addBook = exports.getBookById = exports.getBooks = void 0;
const bookService_1 = require("../service/bookService");
const getBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield bookService_1.BookService.getAllBooks();
        return res.status(200).json({ success: true, data: books });
    }
    catch (error) {
        return res.status(500).json({ success: false, data: error, message: "Error!" });
    }
});
exports.getBooks = getBooks;
const getBookById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const book = yield bookService_1.BookService.getBookById(id);
        if (book) {
            res.status(200).json({ success: true, data: book });
        }
        else {
            res.status(404).json({ success: true, data: null, message: "Book not found" });
        }
    }
    catch (error) {
        return res.status(500).json({ success: false, data: error, message: "Error!" });
    }
});
exports.getBookById = getBookById;
const addBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let bookData = req.body;
        const book = yield bookService_1.BookService.addNewBook(bookData);
        if (book.success) {
            return res.status(200).json({ success: true, data: book });
        }
        else {
            return res.status(404).json({ success: true, data: book });
        }
    }
    catch (error) {
        return res.status(500).json({ success: false, data: error, message: "Error!" });
    }
});
exports.addBook = addBook;
//# sourceMappingURL=bookController.js.map