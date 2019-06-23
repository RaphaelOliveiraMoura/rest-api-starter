import {
    QueryInterface,
    DataTypes,
    Sequelize
} from 'sequelize';

module.exports = {
    up: (queryInterface: QueryInterface, Sequelize: Sequelize) => {
        return queryInterface.createTable('users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },

            name: {
                type: DataTypes.STRING
            },

            email: {
                type: DataTypes.STRING,
                unique: true
            },

            password: {
                type: DataTypes.STRING
            },

            created_at: {
                allowNull: false,
                type: DataTypes.DATE
            },

            updated_at: {
                allowNull: false,
                type: DataTypes.DATE
            }
        });
    },

    down: (queryInterface: QueryInterface, Sequelize: any) => {
        return queryInterface.dropTable('users');
    }
};