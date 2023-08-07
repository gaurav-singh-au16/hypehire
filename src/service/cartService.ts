import { CartRepository } from '../repository/cartRepository';

export class CartService {

  static async getUserCart(id: number) {
    return await CartRepository.getUserCart(id);
  }

  static async addToCart(cartData: { bookId: bigint; userId: bigint; discountRate: number; price: number; }) {
    if(!cartData.bookId){
        return {success: false, message: 'Book Id Not Present'}
    }else if(!cartData.userId){
        return {success: false, message: 'User Id Not Present'}
    }else if(!cartData.discountRate){
        return {success: false, message: 'Discount Rate Not Present'}
    }else if(!cartData.price){
        return {success: false, message: 'Price Not Present'}
    }else{
        return await CartRepository.addToCart(cartData);
    }
  }

  static async removeFromCart(id: number) {
    return await CartRepository.removeFromCart(id);
  }

}
