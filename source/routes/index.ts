import { Router } from "express";

import userRoutes from "./user.routes";
import authRoutes from "./auth.routes";

class RoutesController{
    public routes: Router = Router();

    constructor(){
        userRoutes(this.routes);
        authRoutes(this.routes);
    }
}

export default new RoutesController().routes;