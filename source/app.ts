import express from "express";

class Application {

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
        
    }

}

export default new Application().app;