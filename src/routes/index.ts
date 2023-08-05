import { Router } from "express";
import { getBookById, getBooks } from "../controller/bookController";

const route = Router();

// routes for book
route.get('/api/books', getBooks)
route.get('/api/books/:id', getBookById)




export default route;