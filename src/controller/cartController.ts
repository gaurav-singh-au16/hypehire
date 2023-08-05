import { Request, Response } from "express";
import { CartService } from "../service/cartService";

export const addCart = (req: Request, res: Response) => {
    try {
        let cartData = req.body
        const cart = CartService.addToCart(cartData);
        return res.status(200).json({success: true, data: cart});
        
    } catch (error) {
        return res.status(500).json({success: false, data: error, message: "Error!" });
        
    }
};

export const removeCart = (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const cart = CartService.removeFromCart(id);
        return res.status(200).json({success: true, data: cart});
        
    } catch (error) {
        return res.status(500).json({success: false, data: error, message: "Error!" });
        
    }
};

