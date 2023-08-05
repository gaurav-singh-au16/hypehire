import { CartEntity } from "../entity/cartEntity";

const cart: CartEntity[] = [];

export class CartRepository {

    static getUserCart(id) {
        return cart.find((cart) => cart.id === id);
    }

    static addToCart(cartData) {
        let res = CartEntity.create({
            bookId: cartData.bookId,
            userId: cartData.userId,
            discountRate: cartData.discountRate,
            price: cartData.price,
        })
        return {success: true, data: res}
    }

    static removeFromCart(id) {
        CartEntity.destroy(id)
    }

}