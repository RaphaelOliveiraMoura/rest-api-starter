import { Router } from "express";

import userRoutes from "../routes/userRoutes";
import authRoutes from "../routes/authRoutes";

class RoutesController{
    public routes: Router = Router();

    constructor(){
        this.routes.use('/users', userRoutes);
        this.routes.use('/authenticate', authRoutes);
    }
}

export default new RoutesController().routes;