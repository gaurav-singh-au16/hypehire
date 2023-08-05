import { Router } from "express";
import { getBookById, getBooks } from "../controller/bookController";
import { addCart, getUserCart, removeCart } from "../controller/cartController";

const route = Router();

// routes for book
route.get('/api/books', getBooks)
route.get('/api/books/:id', getBookById)

// cart
route.get('/api/get-user-cart/:userId',  getUserCart)
route.post('/api/add-cart', addCart)
route.get('/api/remove-cart-item/:id', removeCart)




export default route;