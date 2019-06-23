import {
    DataTypes,
    ModelAttributes,
    Model,
} from 'sequelize';

import sequelize from '../utils/databaseStarter';

export class UserRepository extends Model {
    readonly id!: number;
    readonly name!: string;
    readonly email!: string;
    readonly password!: string;
}

export interface User {
    id?: number,
    name?: string,
    email?: string,
    password?: string
}

const columns: ModelAttributes = {
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

UserRepository.init(columns, {
    sequelize,
    tableName: 'users'
});