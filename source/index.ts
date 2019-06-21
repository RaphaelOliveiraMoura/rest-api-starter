import application from './app';
import configuration from './configuration/application.configuration';

application.listen(configuration.port, () => {
    console.log(`Server listening on ${configuration.host}:${configuration.port} ...`);
});