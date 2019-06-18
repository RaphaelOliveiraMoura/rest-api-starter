import { Model, DataTypes, ModelAttributes } from 'sequelize';
import SequelizeDatabase from '../../database';
import { test } from '../../database/configurations'

export default class UserRepository extends Model {
    public id!: number;
    public name!: string;
    public email!: string;
    public password!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

const tables: ModelAttributes = {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}

UserRepository.init(tables, {
    tableName: 'users',
    sequelize: SequelizeDatabase.getInstance(test).sequelize
});