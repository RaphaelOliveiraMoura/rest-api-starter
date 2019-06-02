import path from 'path';
const basePath = __dirname.split('\source')[0];
const modelsPath = path.resolve(basePath, '\source','\models', '\**', '\*.repository.js');

export default {
    dialect: process.env.DATABASE_DIALECT || 'mysql',
    database: process.env.DATABASE_NAME || 'dev_db',
    host: process.env.DATABASE_HOST || '127.0.0.1',
    username: process.env.DATABASE_USERNAME || 'root',
    password: process.env.DATABASE_PASSWORD || 'root',
    storage: __dirname + '/database/mysql',
    modelPaths: [modelsPath],
    logging: false,
    forceReset: false
}