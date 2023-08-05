import { DataTypes, Model } from 'sequelize';
import db from '../config/database'

interface CartType {
    id: BigInt;
    bookId: BigInt;
    userId: BigInt;
    discountRate: Number;
    price: Number;
    status: Enumerator;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

class Cart extends Model<CartType>{
    public id!: BigInt
    public bookId!: BigInt
    public userId!: BigInt
    public discountRate!: Number;
    public price!: Number;
    public status!: Enumerator;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

Cart.init({
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    bookId: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    userId: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    discountRate: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    status: {
        type: DataTypes.TINYINT,
        allowNull: false,
        comment: '0--> not yet purchased, 1--> purchased'
    },
},
    {
        timestamps: true,
        paranoid: true,
        sequelize: db,
        tableName: "cart",
    })

export { CartType, Cart }

