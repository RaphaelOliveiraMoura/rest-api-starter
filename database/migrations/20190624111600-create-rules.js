"use strict";
const sequelize_1 = require("sequelize");
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('rules', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: sequelize_1.DataTypes.INTEGER
            },
            name: {
                allowNull: false,
                type: sequelize_1.DataTypes.STRING
            },
            description: {
                allowNull: false,
                type: sequelize_1.DataTypes.STRING
            },
            createdAt: {
                allowNull: false,
                type: sequelize_1.DataTypes.DATE,
                defaultValue: new Date()
            },
            updatedAt: {
                allowNull: false,
                type: sequelize_1.DataTypes.DATE,
                defaultValue: new Date()
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('rules');
    }
};
