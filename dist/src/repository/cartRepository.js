"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartRepository = void 0;
const bookEntity_1 = require("../entity/bookEntity");
const cartEntity_1 = require("../entity/cartEntity");
const cart = [];
class CartRepository {
    static getUserCart(id) {
        let getCart = cartEntity_1.CartEntity.findAll({
            where: {
                userId: id,
                status: 0
            },
            attributes: ["id", "price", "discountRate"],
            include: [{
                    model: bookEntity_1.BookEntity,
                    attributes: ["id", "coverImage", "title", "description", "price", "discountRate"]
                }]
        });
        return getCart;
    }
    static addToCart(cartData) {
        let res = cartEntity_1.CartEntity.create({
            bookId: cartData.bookId,
            userId: cartData.userId,
            discountRate: cartData.discountRate,
            price: cartData.price,
            status: 0
        });
        return { success: true, data: res };
    }
    static removeFromCart(id) {
        let res = cartEntity_1.CartEntity.destroy({
            where: { id: id }
        });
        return res;
    }
}
exports.CartRepository = CartRepository;
//# sourceMappingURL=cartRepository.js.map