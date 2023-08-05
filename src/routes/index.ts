import { Router } from "express";
import { addBook, getBookById, getBooks } from "../controller/bookController";
import { addCart, getUserCart, removeCart } from "../controller/cartController";
import { addOrder, getOrder } from "../controller/orderController";
import { addNewUser, getUser, getUserById } from "../controller/userController";

const route = Router();

// user
route.get('/api/users', getUser)
route.get('/api/users/:id', getUserById)
route.post('/api/add-users', addNewUser)

// book
route.get('/api/books', getBooks)
route.get('/api/books/:id', getBookById)
route.post('/api/add-books', addBook)

// cart
route.get('/api/get-user-cart/:userId',  getUserCart)
route.post('/api/add-cart', addCart)
route.delete('/api/remove-cart-item/:id', removeCart)

// order
route.get('/api/orders', getOrder)
route.post('/api/buy-books', addOrder)



export default route;