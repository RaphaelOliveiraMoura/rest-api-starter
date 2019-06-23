import configuration from './application.configuration';

const host = `${configuration.host}:${configuration.port}`;

const header = {
    description: 'This is a sample server',
    title: 'Swagger',
    version: '1.0.0'
}

const JWT = {
    type: 'apiKey',
    in: 'header',
    name: 'Authorization',
    description: ""
}

export default {
    swaggerDefinition: {
        info: header,
        host: host,
        basePath: configuration.endpoint,
        produces: ["application/json"],
        schemes: ['http', 'https'],
        securityDefinitions: { JWT }
    },
    docUrl: `${configuration.endpoint}/api-docs`,
    basedir: './',
    files: ['./**/controllers/*.controller.ts']
}