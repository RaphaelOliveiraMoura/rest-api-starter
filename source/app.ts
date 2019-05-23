import express from "express";
import routes from './routes';

class ApplicationController {

    public app: express.Application;

    constructor() {
        this.app = express();

        this.middlewares();
        this.routes();
    }

    private middlewares(): void {
        this.app.use(express.json());
    }

    private routes(): void {
        this.app.use(routes);
    }

}

export default new ApplicationController().app;