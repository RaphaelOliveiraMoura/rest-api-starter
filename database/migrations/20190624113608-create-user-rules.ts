import {
    QueryInterface,
    DataTypes,
    Sequelize
} from 'sequelize';

export = {
    up: (queryInterface: QueryInterface, Sequelize: Sequelize) => {
        return queryInterface.createTable('user_rules', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },

            user_id: {
                references: {
                    model: "users",
                    key: "id"
                },
                allowNull: false,
                type: DataTypes.INTEGER,
            },

            rule_id: {
                references: {
                    model: "rules",
                    key: "id",
                },
                allowNull: false,
                type: DataTypes.INTEGER,
            },

            created_at: {
                allowNull: false,
                type: DataTypes.DATE,
                defaultValue: new Date()
            },

            updated_at: {
                allowNull: false,
                type: DataTypes.DATE,
                defaultValue: new Date()
            }
        });
    },

    down: (queryInterface: QueryInterface, Sequelize: Sequelize) => {
        return queryInterface.dropTable('user_rules');
    }
};
