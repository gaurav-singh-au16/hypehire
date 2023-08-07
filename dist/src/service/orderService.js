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
exports.OrderService = void 0;
const orderRepository_1 = require("../repository/orderRepository");
class OrderService {
    static getAllOrder() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield orderRepository_1.OrderRepository.getAllOrder();
        });
    }
    static addNewOrder(orderData) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!orderData.cartId) {
                return { success: false, message: 'Cart Id Not Present' };
            }
            else {
                return yield orderRepository_1.OrderRepository.addNewOrder(orderData);
            }
        });
    }
}
exports.OrderService = OrderService;
//# sourceMappingURL=orderService.js.map