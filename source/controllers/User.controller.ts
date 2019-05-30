import { Request, Response } from "express";
import UserRepository from '../models/UserRepository.model';
import { validator } from '../utils/Validator'

class UserController {

    /**
     * @route GET /users
     * @group Users
     * @returns {object} 200 - An array of user info
     * @returns {Error}  500 - Unexpected error
     * @security JWT
     */
    public async list(request: Request, response: Response): Promise<any> {
        try {
            const users = await UserRepository.findAll();
            return response.status(200).json(users);
        } catch (error) {
            return response.status(500).json({ error: 'Internal Server Error' });
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
     * @returns {Error}  500 - Unexpected error
     */
    public async create(request: Request, response: Response): Promise<any> {

        const { name, email, password } = request.body;

        try {
            validator(name, 'name', { minSize: 2, maxSize: 25, hasNumbers: false }).validate();
            validator(email, 'email', { minSize: 10, maxSize: 100 }).validate();
            validator(password, 'password', { minSize: 6, maxSize: 25 }).validate();
        } catch (error) {
            return response.status(400).json({ error: error });
        }

        try {
            const user = await UserRepository.create({
                name: request.body.name,
                email: request.body.email,
                password: request.body.password,
            });
            return response.status(200).json(user);
        } catch (error) {
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

export default new UserController();