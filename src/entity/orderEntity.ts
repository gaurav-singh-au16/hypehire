import { DataTypes, Model } from 'sequelize';
import db from '../config/database'

interface OrderType {
    id: BigInt;
    cartId: BigInt;
    transctionId: String;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

class Order extends Model<OrderType>{
    public id!: BigInt
    public cartId!: BigInt
    public transctionId!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

Order.init({
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    cartId: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    transctionId: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},
    {
        timestamps: true,
        paranoid: true,
        sequelize: db,
        tableName: "orders",
    })

export { OrderType, Order }

