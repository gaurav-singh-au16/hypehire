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
exports.addOrder = exports.getOrder = void 0;
const orderService_1 = require("../service/orderService");
const getOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = yield orderService_1.OrderService.getAllOrder();
        return res.status(200).json({ success: true, data: order });
    }
    catch (error) {
        return res.status(500).json({ success: false, data: error, message: "Error!" });
    }
});
exports.getOrder = getOrder;
const addOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let orderData = req.body;
        const order = yield orderService_1.OrderService.addNewOrder(orderData);
        if (order.success) {
            return res.status(200).json({ success: true, data: order });
        }
        else {
            return res.status(404).json({ success: true, data: order });
        }
    }
    catch (error) {
        return res.status(500).json({ success: false, data: error, message: "Error!" });
    }
});
exports.addOrder = addOrder;
//# sourceMappingURL=orderController.js.map