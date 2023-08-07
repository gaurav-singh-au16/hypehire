"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
const cartEntity_1 = require("./cartEntity");
class UserEntity extends sequelize_1.Model {
}
exports.UserEntity = UserEntity;
UserEntity.init({
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    firstName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    paranoid: true,
    sequelize: database_1.default,
    tableName: "users",
});
cartEntity_1.CartEntity.belongsTo(UserEntity, { foreignKey: 'userId' });
UserEntity.hasMany(cartEntity_1.CartEntity, { foreignKey: 'userId' });
//# sourceMappingURL=userEntity.js.map