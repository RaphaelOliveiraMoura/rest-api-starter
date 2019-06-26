"use strict";
const sequelize_1 = require("sequelize");
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('user_rules', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: sequelize_1.DataTypes.INTEGER
            },
            user_id: {
                references: {
                    model: "users",
                    key: "id"
                },
                allowNull: false,
                type: sequelize_1.DataTypes.INTEGER,
            },
            rule_id: {
                references: {
                    model: "rules",
                    key: "id",
                },
                allowNull: false,
                type: sequelize_1.DataTypes.INTEGER,
            },
            created_at: {
                allowNull: false,
                type: sequelize_1.DataTypes.DATE,
                defaultValue: new Date()
            },
            updated_at: {
                allowNull: false,
                type: sequelize_1.DataTypes.DATE,
                defaultValue: new Date()
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('user_rules');
    }
};
