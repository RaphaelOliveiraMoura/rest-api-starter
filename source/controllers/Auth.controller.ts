import { Request, Response } from "express";
import AuthService from '../services/Auth.service';

class AuthController {

    /**
     * @typedef UserAuthenticationRequest
     * @property {string} email.required
     * @property {string} password.required - Represents the params to authenticate a user
     */

     /**
     * @typedef UserAuthenticationResponse
     * @property {integer} token.required - Represents the response of a success authentication
     */

    /**
     * @route POST /authenticate
     * @group Authentication
     * @param {UserAuthenticationRequest.model} user.body.required - user
     * @consumes application/json
     * @produces application/json
     * @returns {UserAuthenticationResponse.model} 200 - JWT Token
     * @returns {Error}  401 - Invalid credentials
     * @returns {Error}  422 - Invalid params
     * @returns {Error}  500 - Internal Server Error
     */
    public async authenticate(request: Request, response: Response): Promise<any> {
        
        const { email, password } = request.body;
        const authService = new AuthService();
        
        authService.on('success', (token: string) => {
            return response.status(200).json({ token: token });
        }).on('invalid-params', (error:string) => {
            return response.status(422).json({ error: error });
        }).on('validation-error', (error:string) => {
            return response.status(401).json({ error: error });
        }).on('error', (error: string) => {
            return response.status(500).json({ error: error });
        });

        authService.authenticate({
            email,
            password
        });
    }
}

export default new AuthController();