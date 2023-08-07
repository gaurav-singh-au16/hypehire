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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const userRepository_1 = require("../repository/userRepository");
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserService {
    static getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield userRepository_1.UserRepository.getAllUsers();
        });
    }
    static getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield userRepository_1.UserRepository.getUserById(id);
        });
    }
    static addNewUser(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            function isEmailValid(email) {
                const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                return emailRegex.test(email);
            }
            if (!userData.firstName) {
                return { success: false, message: 'First Name Not Present' };
            }
            else if (!userData.email) {
                return { success: false, message: 'email Not Present' };
            }
            else if (!isEmailValid(userData.email)) {
                return { success: false, message: 'email Format Invalid' };
            }
            else if (!userData.password) {
                return { success: false, message: 'password Not Present' };
            }
            else {
                const salt = yield bcrypt_1.default.genSalt(10);
                const hashedPassword = yield bcrypt_1.default.hash(userData.password, salt);
                let newUserData = {
                    firstName: userData.firstName,
                    lastName: userData.lastName,
                    email: userData.email,
                    password: hashedPassword
                };
                return yield userRepository_1.UserRepository.addNewUser(newUserData);
            }
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=userService.js.map