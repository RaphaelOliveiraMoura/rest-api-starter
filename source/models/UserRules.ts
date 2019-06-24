import {
    DataTypes,
    ModelAttributes,
    Model,
} from 'sequelize';

import sequelize from '../utils/databaseStarter';

export class UserRulesRepository extends Model {
    readonly id!: number;
    readonly userId!: number;
    readonly ruleId!: number;
}

export interface UserRules {
    id?: number,
    userId?: number
    ruleId?: number
}

const columns: ModelAttributes = {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: 'users',
            key: 'id'
        }
    },
    ruleId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: 'rules',
            key: 'id'
        }
    }
}

UserRulesRepository.init(columns, {
    sequelize,
    tableName: 'user_rules'
});