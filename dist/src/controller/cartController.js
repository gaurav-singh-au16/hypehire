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
exports.removeCart = exports.addCart = exports.getUserCart = void 0;
const cartService_1 = require("../service/cartService");
const getUserCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let userId = parseInt(req.params.userId);
        const cart = yield cartService_1.CartService.getUserCart(userId);
        if (cart) {
            return res.status(200).json({ success: true, data: cart });
        }
        else {
            return res.status(404).json({ success: true, data: cart, message: 'No Item in Cart' });
        }
    }
    catch (error) {
        return res.status(500).json({ success: false, data: error, message: "Error!" });
    }
});
exports.getUserCart = getUserCart;
const addCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let cartData = req.body;
        const cart = yield cartService_1.CartService.addToCart(cartData);
        if (cart.success) {
            return res.status(200).json({ success: true, data: cart });
        }
        else {
            return res.status(404).json({ success: true, data: cart });
        }
    }
    catch (error) {
        return res.status(500).json({ success: false, data: error, message: "Error!" });
    }
});
exports.addCart = addCart;
const removeCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const cart = yield cartService_1.CartService.removeFromCart(id);
        return res.status(200).json({ success: true, data: cart });
    }
    catch (error) {
        return res.status(500).json({ success: false, data: error, message: "Error!" });
    }
});
exports.removeCart = removeCart;
//# sourceMappingURL=cartController.js.map