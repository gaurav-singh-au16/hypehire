"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const userEntity_1 = require("../entity/userEntity");
const users = [];
class UserRepository {
    static getAllUsers() {
        let user = userEntity_1.UserEntity.findAll({
            attributes: ["id", "firstName", "lastName", "email"]
        });
        return user;
    }
    static getUserById(id) {
        let user = userEntity_1.UserEntity.findOne({
            where: { id: id },
            attributes: ["id", "firstName", "lastName", "email"]
        });
        return user;
    }
    static addNewUser(userData) {
        let res = userEntity_1.UserEntity.create({
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            password: userData.password,
        });
        return { success: true, data: res };
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=userRepository.js.map