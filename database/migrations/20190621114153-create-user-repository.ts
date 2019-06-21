import {
    QueryInterface,
} from 'sequelize';

module.exports = {
    up: (queryInterface: QueryInterface, Sequelize: any) => {
        return queryInterface.createTable('UserRepositories', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },

            name: {
                type: Sequelize.STRING
            },

            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },

            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },

    down: (queryInterface: QueryInterface, Sequelize: any) => {
        return queryInterface.dropTable('UserRepositories');
    }
};
