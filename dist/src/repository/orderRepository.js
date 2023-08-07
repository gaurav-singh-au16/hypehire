"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRepository = void 0;
const cartEntity_1 = require("../entity/cartEntity");
const orderEntity_1 = require("../entity/orderEntity");
const uuidv4_1 = require("uuidv4");
const order = [];
class OrderRepository {
    static getAllOrder() {
        let getOrder = orderEntity_1.orderEntity.findAll({
            attributes: ["id", "cartId", "transctionId"],
            include: [
                {
                    model: cartEntity_1.CartEntity,
                    attributes: ["id", "price", "discountRate"],
                }
            ]
        });
        return getOrder;
    }
    static addNewOrder(orderData) {
        let res = orderEntity_1.orderEntity.create({
            cartId: orderData.cartId,
            transctionId: (0, uuidv4_1.uuid)(),
        });
        cartEntity_1.CartEntity.update({
            status: 1
        }, {
            where: {
                id: orderData.cartId
            }
        });
        return { success: true, data: res };
    }
}
exports.OrderRepository = OrderRepository;
//# sourceMappingURL=orderRepository.js.map