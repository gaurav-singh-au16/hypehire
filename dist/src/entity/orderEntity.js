"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderEntity = void 0;
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class orderEntity extends sequelize_1.Model {
}
exports.orderEntity = orderEntity;
orderEntity.init({
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    cartId: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false,
    },
    transctionId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: true,
    paranoid: true,
    sequelize: database_1.default,
    tableName: "orders",
});
//# sourceMappingURL=orderEntity.js.map