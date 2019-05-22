import express from "express";

class Application{

    public app: express.Application;

    constructor(){
        this.app = express();
    }

    private configuration(): void{

    }

    private middlewares(): void{

    }

}

export default new Application().app;