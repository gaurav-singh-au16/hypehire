import { Router } from "express";
import { getBookById, getBooks } from "../controller/bookController";
import { addCart, removeCart } from "../controller/cartController";

const route = Router();

// routes for book
route.get('/api/books', getBooks)
route.get('/api/books/:id', getBookById)

// cart
// route.get('/api/get-cart/:userId', )
route.post('/api/add-cart', addCart)
route.post('/api/remove-cart-item/:id', removeCart)




export default route;