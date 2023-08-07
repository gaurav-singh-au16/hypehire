"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bookController_1 = require("../controller/bookController");
const cartController_1 = require("../controller/cartController");
const orderController_1 = require("../controller/orderController");
const userController_1 = require("../controller/userController");
const route = (0, express_1.Router)();
// user
route.get('/api/users', userController_1.getUser);
route.get('/api/users/:id', userController_1.getUserById);
route.post('/api/add-users', userController_1.addNewUser);
// book
route.get('/api/books', bookController_1.getBooks);
route.get('/api/books/:id', bookController_1.getBookById);
route.post('/api/add-books', bookController_1.addBook);
// cart
route.get('/api/get-user-cart/:userId', cartController_1.getUserCart);
route.post('/api/add-cart', cartController_1.addCart);
route.delete('/api/remove-cart-item/:id', cartController_1.removeCart);
// order
route.get('/api/orders', orderController_1.getOrder);
route.post('/api/buy-books', orderController_1.addOrder);
exports.default = route;
//# sourceMappingURL=index.js.map