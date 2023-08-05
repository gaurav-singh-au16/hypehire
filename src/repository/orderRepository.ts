import { CartEntity } from "../entity/cartEntity";
import { orderEntity } from "../entity/orderEntity";
import { uuid } from 'uuidv4';


const order: orderEntity[] = [];

export class OrderRepository {

    static getAllOrder() {
        return order;
    }

    static addNewOrder(orderData) {
        let res = orderEntity.create({
            cartId: orderData.cartId,
            transctionId: uuid(),
        })
        CartEntity.update({
            status: 1
        }, {
            where: {
                id: orderData.cartId
            }
        })
        return { success: true, data: res }
    }

}