import { Request, Response } from "express";
import UserRepository from '../models/UserRepository.model';

class AuthController {

    /**
     * @typedef UserAuthenticationModel
     * @property {string} email.required
     * @property {string} password.required - This is a model that represent information about the authentication of users
     */

    /**
     * @route POST /authenticate
     * @group Authentication
     * @param {UserAuthenticationModel.model} user.body.required - user
     * @consumes application/json
     * @produces application/json
     * @returns {object} 200 - User information and JWT token 
     * @returns {Error}  400 - Invalid credentials error
     * @returns {Error}  500 - Unexpected error
     */
    public async authenticate(request: Request, response: Response): Promise<any> {

        try {

        } catch (error) {
            return response.status(400).json({ error: error });
        }

        try {
            const user = await UserRepository.findOne({
                where: {
                    email: request.body.email,
                    password: request.body.password
                }
            });
            if(!user) return response.status(401).json({ error: 'user not found' });

            return response.status(200).json({ token: '123' });
        } catch (error) {
            response.status(401);
            return response.json({ error: 'Internal Server Error' });
        }
    }
}

export default new AuthController();