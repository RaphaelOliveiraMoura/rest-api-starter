import configurations from './application.configuration'

type SwaggerConfigurationOptionsInterface = {
    swaggerDefinition: {
        info: {
            description: string,
            version: string,
            title: string
        }
        host: string,
        basePath: string,
        produces: string[],
        schemes: string[],
        securityDefinitions: {}
    },
    docUrl: string
    basedir: string,
    files: string[]
}

class SwaggerConfiguration {

    public options: SwaggerConfigurationOptionsInterface;

    constructor() {
        this.options = {
            swaggerDefinition: {
                info: {
                    description: 'This is a sample server',
                    title: 'Swagger',
                    version: '1.0.0',
                },
                host: 'localhost:3000',
                basePath: '/api/v1',
                produces: [
                    "application/json"
                ],
                schemes: ['http', 'https'],
                securityDefinitions: {
                    JWT: {
                        type: 'apiKey',
                        in: 'header',
                        name: 'Authorization',
                        description: "",
                    }
                }
            },
            docUrl: '/api-docs',
            basedir: './',
            files: ['./**/controllers/*.controller.js']
        };
    }

}

export default new SwaggerConfiguration().options;