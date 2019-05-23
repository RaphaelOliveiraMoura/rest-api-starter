import { Router } from "express";
import UserController from "./controllers/UserController";

class RoutesController{
    public routes: Router = Router();

    constructor(){
        this.routes.get('/users', UserController.list);
        this.routes.post('/users', UserController.create);
    }
}

export default new RoutesController().routes;