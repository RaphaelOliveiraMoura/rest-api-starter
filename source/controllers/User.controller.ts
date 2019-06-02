import { Request, Response } from "express";
import UserRepository from '../models/repositories/User.repository';
import UserService from "../services/User.service";

class UserController {

    /**
     * @route GET /users
     * @group Users
     * @returns {object} 200 - A list of users
     * @returns {Error} 500 - I
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
     * @typedef UserCreationRequest
     * @property {string} name.required
     * @property {string} email.required
     * @property {string} password.required - This is a model that represent the necessary params to create a user 
     */

    /**
     * @typedef UserCreationResponse
     * @property {integer} id.required
     * @property {string} name.required
     * @property {string} email.required
     * @property {string} createdAt.required
     * @property {string} updatedAt.required - This represents a response model of a success creation user
     */

    /**
     * @route POST /users
     * @group Users
     * @param {UserCreationRequest.model} user.body.required - user
     * @consumes application/json
     * @produces application/json
     * @returns {UserCreationResponse.model} 200 - User informations
     * @returns {Error} 400 - Invalid params
     * @returns {Error} 500 - Internal Server Error
     */
    public async create(request: Request, response: Response): Promise<any> {
        const { name, email, password } = request.body;
        const userService = new UserService();

        userService.on('success', (user: any) => {
            return response.status(200).json(user);
        }).on('invalid-params', (error: string) => {
            return response.status(400).json({ error: error });
        }).on('error', (error: string) => {
            return response.status(500).json({ error: error });
        })

        userService.createUser({
            name,
            email,
            password
        });
    }
}

export default new UserController();