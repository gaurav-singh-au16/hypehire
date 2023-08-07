import { Request, Response } from "express";
import { UserService } from "../service/userService";

export const getUser = async(req: Request, res: Response) => {
    try {
        const books = await UserService.getAllUsers();
        return res.status(200).json({success: true, data: books});
        
    } catch (error) {
        return res.status(500).json({success: false, data: error, message: "Error!" });
        
    }
};
export const getUserById = async(req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const users = await UserService.getUserById(id);
        return res.status(200).json({success: true, data: users});
        
    } catch (error) {
        return res.status(500).json({success: false, data: error, message: "Error!" });
        
    }
};

export const addNewUser = async(req: Request, res: Response) => {
    try {
        let userData = req.body
        const user = await UserService.addNewUser(userData);
        if(user.success){
            return res.status(200).json({success: true, data: user});
        }else{
            return res.status(404).json({success: true, data: user});
        }
        
    } catch (error) {
        return res.status(500).json({success: false, data: error, message: "Error!" });
        
    }
};