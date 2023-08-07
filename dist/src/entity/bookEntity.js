"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookEntity = void 0;
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
const cartEntity_1 = require("./cartEntity");
class BookEntity extends sequelize_1.Model {
}
exports.BookEntity = BookEntity;
BookEntity.init({
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
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
    coverImage: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    }
}, {
    timestamps: true,
    paranoid: true,
    sequelize: database_1.default,
    tableName: "books",
});
cartEntity_1.CartEntity.belongsTo(BookEntity, { foreignKey: 'bookId' });
BookEntity.hasMany(cartEntity_1.CartEntity, { foreignKey: 'bookId' });
//# sourceMappingURL=bookEntity.js.map