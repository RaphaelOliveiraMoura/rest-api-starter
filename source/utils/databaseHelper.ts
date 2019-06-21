import { Sequelize } from 'sequelize';
const configurations = require('../../database/configurations');

const env = process.env.NODE_ENV || 'development';
const { database, username, password, host, dialect } = configurations[env];

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
  logging: false
});

console.log('Environment:', env);

export default sequelize;