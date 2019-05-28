import application from './app';
import configuration from './configuration/application.configuration';
import sequelize from './configuration/sequelize.configuration';

(async () => {

    await sequelize.sync();

    application.listen(configuration.port, () => {
        console.log(`Server listening on ${configuration.host}:${configuration.port} ...`);
    });

})()