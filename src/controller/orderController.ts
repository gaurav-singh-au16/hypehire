import { Request, Response } from "express";
import { OrderService } from "../service/orderService";

export const getOrder = async(req: Request, res: Response) => {
    try {
        const order = await OrderService.getAllOrder();
        return res.status(200).json({success: true, data: order});
        
    } catch (error) {
        return res.status(500).json({success: false, data: error, message: "Error!" });
        
    }
};

export const addOrder = async(req: Request, res: Response) => {
    try {
        let orderData = req.body
        const order = await OrderService.addNewOrder(orderData);
        if(order.success){
            return res.status(200).json({success: true, data: order});
        }else{
            return res.status(404).json({success: true, data: order, message: order['message']});
        }
        
    } catch (error) {
        return res.status(500).json({success: false, data: error, message: "Error!" });
        
    }
};


