import express from "express";
import routes from './routes/routes';
import swaggerConfigurationOptions from './configuration/swagger.configuration';

class ApplicationController {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
        this.apiDocumentation();
    }

    private apiDocumentation() {
        const expressSwagger = require('express-comments-swagger')(this.app);
        expressSwagger(swaggerConfigurationOptions);
    }

    private middlewares(): void {
        this.app.use(express.json());
    }

    private routes(): void {
        this.app.use('/api/v1', routes);
    }

}

export default new ApplicationController().app;