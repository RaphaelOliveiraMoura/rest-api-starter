import { Sequelize } from 'sequelize-typescript';
import { Op } from 'sequelize';

const modelsPath = __dirname.split('/configuration')[0] + '/models/**/*.model.js';

const sequelize: Sequelize = new Sequelize({
    dialect: process.env.DATABASE_DIALECT || 'mysql',
    database: process.env.DATABASE_NAME || 'dev_db',
    host: process.env.DATABASE_HOST || '127.0.0.1',
    username: process.env.DATABASE_USERNAME || 'root',
    password: process.env.DATABASE_PASSWORD || 'root',
    operatorsAliases: Op,
    storage: __dirname + '/database/mysql',
    modelPaths: [modelsPath]
});

export default sequelize;