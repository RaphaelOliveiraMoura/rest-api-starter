require('dotenv').config();

const { DATABASE_DIALECT: dialect,
    DATABASE_NAME: database,
    DATABASE_HOST: host,
    DATABASE_USERNAME: username,
    DATABASE_PASSWORD: password
} = process.env;

function throwEnvironmentVariableError(envTitle: string): void {
    throw new Error(`${envTitle} variable environment not setted or invalid`);
}

if (!database) throwEnvironmentVariableError('DATABASE_NAME');
if (!host) throwEnvironmentVariableError('DATABASE_HOST');
if (!username) throwEnvironmentVariableError('DATABASE_USERNAME');
if (!password) throwEnvironmentVariableError('DATABASE_PASSWORD');

let typedDialect: 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | undefined;

if (!dialect ||
    dialect != 'mysql' &&
    dialect != 'postgres' &&
    dialect != 'sqlite' &&
    dialect != 'mariadb' &&
    dialect != 'mssql') {

    throwEnvironmentVariableError('DATABASE_DIALECT');
} else {
    typedDialect = dialect;
}

export default {
    dialect: typedDialect,
    database: database || 'database',
    host: host || 'localhost',
    username: username || 'root',
    password: password || 'root',
    resetWhenRestart: false
}