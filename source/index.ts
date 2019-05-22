import application from './app';
import configuration from './configuration/index';

application.listen(configuration.port, ()=>{
    console.log(`Server listening on ${configuration.host}:${configuration.port}`);
});