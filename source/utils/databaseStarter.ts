import { Sequelize } from 'sequelize';
require('dotenv').config();
const configurations = require('../../database/configurations');

const env = process.env.NODE_ENV || 'development';
console.log('>> Environment:', env);

const { database, username, password, host, dialect } = configurations[env];

const logging = process.env.DATABASE_LOG == 'true' ? undefined : false;

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
  logging,
  define: {
    freezeTableName: true,
    underscored: true
  }
});

export default sequelize;