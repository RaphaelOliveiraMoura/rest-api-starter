'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('rules', [
            {
                name: 'admin',
                description: 'this rule has access in all functionalities of the system',
            },
            {
                name: 'user',
                description: 'this is a common user in the system',
            }
        ], {});
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('rules', null, {});
    }
};
