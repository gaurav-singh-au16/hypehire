import { Request, Response } from "express";
import { OrderService } from "../service/orderService";

export const getOrder = (req: Request, res: Response) => {
    try {
        const order = OrderService.getAllOrders();
        return res.status(200).json({success: true, data: order});
        
    } catch (error) {
        return res.status(500).json({success: false, data: error, message: "Error!" });
        
    }
};

export const addOrder = (req: Request, res: Response) => {
    try {
        let orderData = req.body
        const order = OrderService.adNewOrders(orderData);
        return res.status(200).json({success: true, data: orderData});
        
    } catch (error) {
        return res.status(500).json({success: false, data: error, message: "Error!" });
        
    }
};


