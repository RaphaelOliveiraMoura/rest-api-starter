import { application } from './app';
import configuration from './configuration/application.configuration';
import Database from '../database/index';
import { main } from '../database/configurations'

Database.getInstance(main).sync();

application.listen(configuration.port, () => {
    console.log(`Server listening on ${configuration.host}:${configuration.port} ...`);
});