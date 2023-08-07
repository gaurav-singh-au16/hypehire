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
exports.addNewUser = exports.getUserById = exports.getUser = void 0;
const userService_1 = require("../service/userService");
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield userService_1.UserService.getAllUsers();
        return res.status(200).json({ success: true, data: books });
    }
    catch (error) {
        return res.status(500).json({ success: false, data: error, message: "Error!" });
    }
});
exports.getUser = getUser;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const users = yield userService_1.UserService.getUserById(id);
        return res.status(200).json({ success: true, data: users });
    }
    catch (error) {
        return res.status(500).json({ success: false, data: error, message: "Error!" });
    }
});
exports.getUserById = getUserById;
const addNewUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let userData = req.body;
        const user = yield userService_1.UserService.addNewUser(userData);
        if (user.success) {
            return res.status(200).json({ success: true, data: user });
        }
        else {
            return res.status(404).json({ success: true, data: user });
        }
    }
    catch (error) {
        return res.status(500).json({ success: false, data: error, message: "Error!" });
    }
});
exports.addNewUser = addNewUser;
//# sourceMappingURL=userController.js.map