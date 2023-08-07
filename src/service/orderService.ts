import { OrderRepository } from '../repository/orderRepository';

export class OrderService {

  static async getAllOrder() {
    return await OrderRepository.getAllOrder();
  }

  static async addNewOrder(orderData: {cartId: bigint}) {
    if(!orderData.cartId){
        return {success: false, message: 'Cart Id Not Present'}
    }else{
        return await OrderRepository.addNewOrder(orderData);
    }
  }


}
