import { Router } from "express";

import authMiddleware from "../middlewares/auth.middleware";

import AuthController from "../controllers/Auth.controller";
import UserController from "../controllers/User.controller";

const users = Router()
    .post('/', UserController.create)
    .use(authMiddleware)
    .get('/', UserController.list);

const authenticate = Router()
    .post('/', AuthController.authenticate);;

const routes = Router()
    .use('/users', users)
    .use('/authenticate', authenticate);

export default routes;