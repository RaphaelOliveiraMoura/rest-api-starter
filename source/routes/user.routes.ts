import { Router, Request, Response, NextFunction } from "express";
import authMiddleware from '../middlewares/auth.middleware'
import UserController from "../controllers/User.controller";

class UserRoutes {
    public routes: Router = Router();

    constructor() {
        this.publicRoutes();
        this.privateRoutes();
    }

    publicRoutes(){
        this.routes.post('/', UserController.create);
    }

    privateRoutes(){
        this.routes.use(authMiddleware);
        this.routes.get('/', UserController.list);
    }
}

export default new UserRoutes().routes;