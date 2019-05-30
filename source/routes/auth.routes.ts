import { Router } from "express";
import AuthController from "../controllers/Auth.controller";

class AuthRoutes {
    public routes: Router = Router();

    constructor() {
        this.routes.post('/', AuthController.authenticate);
    }
}

export default new AuthRoutes().routes;