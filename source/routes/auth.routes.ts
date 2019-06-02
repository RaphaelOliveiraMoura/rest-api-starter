import { Router } from "express";
import AuthController from "../controllers/Auth.controller";

const publicRoutes: Router = Router();
publicRoutes.post('/', AuthController.authenticate);

export default (routes:Router) => {
    routes.use('/authenticate', publicRoutes);
}