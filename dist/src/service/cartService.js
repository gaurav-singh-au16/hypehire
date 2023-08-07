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
exports.CartService = void 0;
const cartRepository_1 = require("../repository/cartRepository");
class CartService {
    static getUserCart(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield cartRepository_1.CartRepository.getUserCart(id);
        });
    }
    static addToCart(cartData) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!cartData.bookId) {
                return { success: false, message: 'Book Id Not Present' };
            }
            else if (!cartData.userId) {
                return { success: false, message: 'User Id Not Present' };
            }
            else if (!cartData.discountRate) {
                return { success: false, message: 'Discount Rate Not Present' };
            }
            else if (!cartData.price) {
                return { success: false, message: 'Price Not Present' };
            }
            else {
                return yield cartRepository_1.CartRepository.addToCart(cartData);
            }
        });
    }
    static removeFromCart(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield cartRepository_1.CartRepository.removeFromCart(id);
        });
    }
}
exports.CartService = CartService;
//# sourceMappingURL=cartService.js.map