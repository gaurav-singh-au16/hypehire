import { BookEntity } from "../entity/bookEntity";
import { CartEntity } from "../entity/cartEntity";

const cart: CartEntity[] = [];

export class CartRepository {

    static getUserCart(id) {
        let getCart = CartEntity.findOne({
            where: {
                userId: id
            },
            attributes: ["id", "price", "discountRate"],
            include: [{
                model: BookEntity,
                attributes: ["id", "coverImage", "title", "description", "price", "discountRate"]
            }]
        })
        return getCart
    }

    static addToCart(cartData) {
        let res = CartEntity.create({
            bookId: cartData.bookId,
            userId: cartData.userId,
            discountRate: cartData.discountRate,
            price: cartData.price,
            status: 0
        })
        return {success: true, data: res}
    }

    static removeFromCart(id) {
        let res = CartEntity.destroy(id)
        return res
    }

}