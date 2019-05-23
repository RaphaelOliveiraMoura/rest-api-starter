import express from "express";
import routes from './routes';
import swaggerUi from 'swagger-ui-express';
import swaggerConfigurationOptions from './configuration/swagger.configuration'
class ApplicationController {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
        this.apiDocumentation();
    }

    private apiDocumentation() {

        const swaggerJSDoc = require('swagger-jsdoc'); 

        const oasDefinition = swaggerJSDoc(swaggerConfigurationOptions);  
        const swaggerOptions = {  
          customSiteTitle: 'My Service',  
          customCss: '.topbar { display: none }',  
        };  

        this.app.use('/docs', swaggerUi.serve, swaggerUi.setup(oasDefinition, swaggerOptions));  

    }

    private middlewares(): void {
        this.app.use(express.json());
    }

    private routes(): void {
        this.app.use('/api/v1', routes);
    }

}

export default new ApplicationController().app;