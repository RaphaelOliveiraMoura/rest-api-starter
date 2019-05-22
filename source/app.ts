import express from "express";
import UserController from "./controllers/UserController";

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
        this.app.get('/users', UserController.list);
    }

}

export default new Application().app;