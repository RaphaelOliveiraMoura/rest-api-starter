import { Op } from 'sequelize';

const modelsPath = __dirname.split('/__tests__')[0] + '/source/models/**/*.model.js';

export default{
    dialect: process.env.TEST_DATABASE_DIALECT || 'mysql',
    database: process.env.TEST_DATABASE_NAME || 'test_db',
    host: process.env.TEST_DATABASE_HOST || '127.0.0.1',
    username: process.env.TEST_DATABASE_USERNAME || 'root',
    password: process.env.TEST_DATABASE_PASSWORD || 'root',
    operatorsAliases: Op,
    logging: false,
    storage: __dirname + '/database/mysql',
    modelPaths: [modelsPath],
    forceReset: true
};