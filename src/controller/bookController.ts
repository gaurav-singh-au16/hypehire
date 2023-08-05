import { Request, Response } from "express";
import { BookService } from "../service/bookService";

export const getBooks = (req: Request, res: Response) => {
    try {
        const books = BookService.getAllBooks();
        return res.status(200).json({success: true, data: books});
        
    } catch (error) {
        return res.status(500).json({success: false, data: error, message: "Error!" });
        
    }
};

export const getBookById = async(req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const book = await BookService.getBookById(id);
        if (book) {
          res.status(200).json({success: true, data: book});
        } else {
          res.status(404).json({success: true, data: null, message: "Book not found" });
        }
        
    } catch (error) {
        return res.status(500).json({success: false, data: error, message: "Error!" });
    }
};
