import { Sequelize } from 'sequelize-typescript';
import { Op } from 'sequelize';

const modelsPath = __dirname.split('/__tests__')[0] + '/source/models/**/*.model.js';
/**
 * This configuration run just when the test with jest is started
 */
const sequelize: any = new Sequelize({
    database: 'test_db',
    dialect: 'mysql',
    username: 'root',
    operatorsAliases: Op,
    password: 'root',
    host: '127.0.0.1',
    storage: __dirname + '/database/mysql',
    modelPaths: [modelsPath]
});

export default sequelize;