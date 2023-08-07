"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartEntity = void 0;
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
const orderEntity_1 = require("./orderEntity");
class CartEntity extends sequelize_1.Model {
}
exports.CartEntity = CartEntity;
CartEntity.init({
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    bookId: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false,
    },
    userId: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false,
    },
    discountRate: {
        type: sequelize_1.DataTypes.DOUBLE,
        allowNull: false,
    },
    price: {
        type: sequelize_1.DataTypes.DOUBLE,
        allowNull: false,
    },
    status: {
        type: sequelize_1.DataTypes.TINYINT,
        allowNull: false,
        comment: '0--> not yet purchased, 1--> purchased',
        defaultValue: 0
    },
}, {
    timestamps: true,
    paranoid: true,
    sequelize: database_1.default,
    tableName: "cart",
});
orderEntity_1.orderEntity.belongsTo(CartEntity, { foreignKey: 'cartId' });
CartEntity.hasMany(orderEntity_1.orderEntity, { foreignKey: 'cartId' });
//# sourceMappingURL=cartEntity.js.map