import { Request, Response } from "express";
import UserRepository from '../models/UserRepository.model';

class UserController {

    /**
     * @route GET /users
     * @group Users
     * @returns {object} 200 - An array of user info
     * @returns {Error}  default - Unexpected error
     */
    public async list(request: Request, response: Response): Promise<any> {
        try {
            const users = await UserRepository.findAll();
            response.status(200);
            return response.json(users);
        } catch (error) {
            response.status(500);
            return response.json({ error: 'Internal Server Error' });
        }
    }

    /**
     * @typedef UserCreationModel
     * @property {string} name.required
     * @property {string} email.required
     * @property {string} password.required - This is a model that represent information about the creation of users
     */

    /**
     * @route POST /users
     * @group Users
     * @param {UserCreationModel.model} user.body.required - user
     * @consumes application/json
     * @produces application/json
     * @returns {object} 200 - Id of created user
     * @returns {Error}  default - Unexpected error
     */
    public async create(request: Request, response: Response): Promise<any> {

        if (!request.body.name || !request.body.email || !request.body.password) {
            return response.status(400).json({ errors: 'missing arguments' });
        }

        try {
            const user = await UserRepository.create({
                name: request.body.name,
                email: request.body.email,
                password: request.body.password,
            });
            response.status(200);
            return response.json(user);
        } catch (error) {
            response.status(500);
            return response.json({ error: 'Internal Server Error' });
        }
    }
}

export default new UserController();