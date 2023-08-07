import { Request, Response } from "express";
import { CartService } from "../service/cartService";

export const getUserCart = async(req: Request, res: Response) => {
    try {
        let userId = parseInt(req.params.userId)
        const cart = await CartService.getUserCart(userId);
        if(cart){
            return res.status(200).json({success: true, data: cart});

        }else{
            return res.status(404).json({success: true, data: cart, message: 'No Item in Cart'});

        }
        
    } catch (error) {
        return res.status(500).json({success: false, data: error, message: "Error!" });
        
    }
};

export const addCart = async(req: Request, res: Response) => {
    try {
        let cartData = req.body
        const cart = await CartService.addToCart(cartData);
        if(cart.success){
            return res.status(200).json({success: true, data: cart});
        }else{
            return res.status(404).json({success: true, data: cart});
        }
        
    } catch (error) {
        return res.status(500).json({success: false, data: error, message: "Error!" });
        
    }
};

export const removeCart = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const cart = await CartService.removeFromCart(id);
        return res.status(200).json({success: true, data: cart});
        
    } catch (error) {
        return res.status(500).json({success: false, data: error, message: "Error!" });
        
    }
};

