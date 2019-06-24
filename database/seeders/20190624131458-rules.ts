'use strict';

module.exports = {
  up: (queryInterface: any, Sequelize: any) => {
    return queryInterface.bulkInsert('rules',
      [
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

  down: (queryInterface:any, Sequelize: any) => {
    return queryInterface.bulkDelete('rules', null, {});
  }
};
