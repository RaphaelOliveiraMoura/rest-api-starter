import { Router } from "express";

import userRoutes from "../routes/userRoutes";

class RoutesController{
    public routes: Router = Router();

    constructor(){
        this.routes.use('/users', userRoutes);
    }
}

export default new RoutesController().routes;