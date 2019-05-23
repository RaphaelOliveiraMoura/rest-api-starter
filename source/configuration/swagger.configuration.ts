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
        schemes: string[]
    },
    apis: string[]
}

class SwaggerConfiguration {

    public options: SwaggerConfigurationOptionsInterface;

    constructor() {
        this.options = {
            swaggerDefinition: {
                info: {
                    description: 'description of API',
                    version: '1.0.0',
                    title: 'API Base Structure',
                },
                host: `${configurations.host}:${configurations.port}`,
                basePath: '/api/v1',
                produces: ['application/json'],
                schemes: [
                    'http',
                    'https'
                ],
            },
            apis: ['./**/controllers/*.controller.js'],
        };
    }

}

export default new SwaggerConfiguration().options;