import express from "express";
import routes from './routes';
import applicationConfiguration from './configuration/application.configuration';
import swaggerConfigurationOptions from './configuration/swagger.configuration';

class ApplicationController {

    public express: express.Application;

    constructor() {
        this.express = express();
        this.middlewares();
        this.routes();
        this.apiDocumentation();
    }

    public listen(port: string | number, callback: () => void): void {
        this.express.listen(port, callback);
    }

    private apiDocumentation(): void {
        const expressSwagger = require('express-comments-swagger')(this.express);
        expressSwagger(swaggerConfigurationOptions);
    }

    private middlewares(): void {
        this.express.use(express.json());
    }

    private routes(): void {
        this.express.use(applicationConfiguration.endpoint, routes);
    }

}

export default new ApplicationController();