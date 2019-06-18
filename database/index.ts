import { Sequelize } from 'sequelize';
import ConfigurationsInterface from './@types/DatabaseConfigurationsInterface';

export default class SequelizeDatabase {

    private static myInstance: SequelizeDatabase;
    public sequelize: Sequelize;
    private static configurations: ConfigurationsInterface;
    private static synced: boolean = false;

    private constructor() {
        const { database, username, password, host, dialect } = SequelizeDatabase.configurations;
        this.sequelize = new Sequelize(database, username, password, {
            host,
            dialect
        });
    }

    public static getInstance(configurations: ConfigurationsInterface): SequelizeDatabase {
        if (!SequelizeDatabase.myInstance) {
            SequelizeDatabase.configurations = configurations;
            SequelizeDatabase.myInstance = new SequelizeDatabase();
        }
        return SequelizeDatabase.myInstance;
    }

    public async sync() {
        if(SequelizeDatabase.synced) return;
        const { resetWhenRestart } = SequelizeDatabase.configurations;
        await SequelizeDatabase.getInstance(SequelizeDatabase.configurations).sequelize.sync({force: resetWhenRestart})
            .then(() => {
                console.log('Connection has been established successfully.');
                SequelizeDatabase.synced = true;
            }).catch(err => {
                throw new Error('Unable to connect to the database: ' + err);
            });
    }
}