import { Router } from "express";
import userRoutes from "./user.routes";
import authRoutes from "./auth.routes";

class RoutesController{
    public routes: Router = Router();

    constructor(){
        this.routes.use('/users', userRoutes);
        this.routes.use('/authenticate', authRoutes);
    }
}

export default new RoutesController().routes;