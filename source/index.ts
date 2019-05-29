import { application } from './app';
import configuration from './configuration/application.configuration';
import sequelizeConfiguration from './configuration/sequelize.configuration';

startServer();

async function startServer() {

    await application.syncDatabase(sequelizeConfiguration);

    application.listen(configuration.port, () => {
        console.log(`Server listening on ${configuration.host}:${configuration.port} ...`);
    });

}