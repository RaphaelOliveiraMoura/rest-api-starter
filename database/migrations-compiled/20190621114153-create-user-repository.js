"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: sequelize_1.DataTypes.INTEGER
            },
            name: {
                type: sequelize_1.DataTypes.STRING
            },
            email: {
                type: sequelize_1.DataTypes.STRING,
                unique: true
            },
            password: {
                type: sequelize_1.DataTypes.STRING
            },
            created_at: {
                allowNull: false,
                type: sequelize_1.DataTypes.DATE
            },
            updated_at: {
                allowNull: false,
                type: sequelize_1.DataTypes.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('users');
    }
};
