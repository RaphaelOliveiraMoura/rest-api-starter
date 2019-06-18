export default interface DatabaseConfigurationsInterface {
    dialect?: 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql'
    database: string
    host: string
    username: string
    password: string
    resetWhenRestart?: boolean
}