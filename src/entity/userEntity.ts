import { DataTypes, Model } from 'sequelize';
import db from '../config/database';

interface UserType {
    id: BigInt;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

class UserEntity extends Model<UserType>{
    public id!: BigInt
    public firstName!: string;
    public lastName!: string;
    public email!: string;
    public password!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

UserEntity.init({
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
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

export { UserType, UserEntity }