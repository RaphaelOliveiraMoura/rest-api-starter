import { Request, Response } from "express";
import UserRepository from '../models/UserRepository.model';
import { sign } from 'jsonwebtoken';
const protectKey = require('../../../credentials.json').protectKey;

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
     * @returns {object} 200 - JWT Token
     * @returns {Error}  401 - Invalid credentials
     * @returns {Error}  500 - Internal Server Error
     */
    public async authenticate(request: Request, response: Response): Promise<any> {
        try {

            const user = await UserRepository.findOne({
                where: {
                    email: request.body.email,
                    password: request.body.password
                }
            });

            if (!user)
                return response.status(401).json({ error: 'User not found' });

            const jwtToken = sign({
                data: user.id
            }, protectKey, { expiresIn: 60 * 60 });

            return response.status(200).json({ token: jwtToken });

        } catch (error) {
            response.status(500);
            return response.json({ error: 'Internal Server Error' });
        }
    }
}

export default new AuthController();