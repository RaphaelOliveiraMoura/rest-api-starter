import { Router } from "express";
import UserController from "../controllers/User.controller";
import authMiddleware from "../middlewares/auth.middleware";

const publicRoutes: Router = Router();
const privateRoutes: Router = Router().use(authMiddleware);

publicRoutes.post('/', UserController.create);
privateRoutes.get('/', UserController.list);

export default (routes:Router) => {
    routes.use('/users', publicRoutes, privateRoutes);
}