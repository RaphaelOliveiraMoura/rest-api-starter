import {
    DataTypes,
    ModelAttributes,
    Model,
} from 'sequelize';

import sequelize from '../utils/databaseStarter';

export class RulesRepository extends Model {
    readonly id!: number;
    readonly name!: string;
    readonly description!: string;
}

export interface Rules {
    id?: number,
    name?: string,
    description?: string
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
    description: {
        type: DataTypes.STRING
    }
}

RulesRepository.init(columns, {
    sequelize,
    tableName: 'rules'
});