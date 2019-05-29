
import { Sequelize } from 'sequelize-typescript';

export type ISequelizeConfigParams = {
    dialect: string,
    database: string,
    host: string,
    username: string,
    password: string,
    storage: string,
    modelPaths: string[],
    logging: boolean,
    operatorsAliases?: {},
    forceReset: boolean
}

export class Database {

    private sequelize: Sequelize;

    constructor(private configurations: ISequelizeConfigParams) {
        this.sequelize = new Sequelize({
            dialect: configurations.dialect,
            database: configurations.database,
            host: configurations.host,
            username: configurations.username,
            password: configurations.password,
            storage: configurations.storage,
            modelPaths: configurations.modelPaths,
            logging: configurations.logging
        });
    }

    async start() {
        await this.sequelize.sync({ force: this.configurations.forceReset });
    }

}