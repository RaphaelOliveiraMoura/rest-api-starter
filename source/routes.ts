import { Router } from "express";
import UserController from "./controllers/UserController";

class RoutesController{
    public routes: Router = Router();

    constructor(){
        this.routes.get('/users', UserController.list);
    }
}

export default new RoutesController().routes;