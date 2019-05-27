import { Router } from "express";
import UserController from "../controllers/User.controller";

class UserRoutes {
    public routes: Router = Router();

    constructor() {
        this.routes.get('/', UserController.list);
        this.routes.post('/', UserController.create);
    }
}

export default new UserRoutes().routes;