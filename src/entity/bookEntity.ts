import { DataTypes, Model } from 'sequelize';
import db from '../config/database'

interface BookType {
    id: BigInt;
    title: string;
    description: string;
    discountRate: Number;
    price: Number;
    coverImage: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

class BookEntity extends Model<BookType>{
    public id!: BigInt
    public title!: string;
    public description!: string;
    public discountRate!: Number;
    public price!: Number;
    public coverImage!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

BookEntity.init({
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
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
    coverImage: {
        type: DataTypes.STRING,
        allowNull: true,
    }
},
    {
        timestamps: true,
        paranoid: true,
        sequelize: db,
        tableName: "books",
    })

export { BookType, BookEntity }

