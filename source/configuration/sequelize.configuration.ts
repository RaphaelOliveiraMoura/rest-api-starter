import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize({
    database: 'test_db',
    dialect: 'mysql',
    username: 'root',
    password: 'root',
    host: '127.0.0.1',
    storage: __dirname + '/database/mysql',
    modelPaths: ['source/models/**/*.model.ts']
});

export default sequelize;