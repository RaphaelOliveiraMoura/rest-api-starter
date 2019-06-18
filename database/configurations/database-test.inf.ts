require('dotenv').config();

const {
    TEST_DATABASE_DIALECT: test_dialect,
    TEST_DATABASE_NAME: test_database,
    TEST_DATABASE_HOST: test_host,
    TEST_DATABASE_USERNAME: test_username,
    TEST_DATABASE_PASSWORD: test_password
} = process.env;

function throwEnvironmentVariableError(envTitle: string): void {
    throw new Error(`${envTitle} variable environment not setted or invalid`);
}

if (!test_database) throwEnvironmentVariableError('TEST_DATABASE_NAME');
if (!test_host) throwEnvironmentVariableError('TEST_DATABASE_HOST');
if (!test_username) throwEnvironmentVariableError('TEST_DATABASE_USERNAME');
if (!test_password) throwEnvironmentVariableError('TEST_DATABASE_PASSWORD');

let typedDialect: 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | undefined;

if (!test_dialect ||
    test_dialect != 'mysql' &&
    test_dialect != 'postgres' &&
    test_dialect != 'sqlite' &&
    test_dialect != 'mariadb' &&
    test_dialect != 'mssql') {

    throwEnvironmentVariableError('TEST_DATABASE_DIALECT');
} else {
    typedDialect = test_dialect;
}

export default {
    dialect: typedDialect,
    database: test_database || 'database',
    host: test_host || 'localhost',
    username: test_username || 'root',
    password: test_password || 'root',
    resetWhenRestart: true
}