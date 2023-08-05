import { DataTypes, Model } from 'sequelize';
import db from '../config/database';

interface UserType {
    id: BigInt;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

class User extends Model<UserType>{
    public id!: BigInt
    public first_name!: string;
    public last_name!: string;
    public email!: string;
    public password!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

User.init({
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
        
    }

},
    {
        timestamps: true,
        paranoid: true,
        sequelize: db,
        tableName: "users",
    })

export { UserType, User }