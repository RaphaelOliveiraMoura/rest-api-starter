import { Request, Response } from "express";
import AuthService from '../services/Auth.service';
import { EventEmitter } from "events";

class AuthController {

    /**
     * @typedef UserAuthenticationRequest
     * @property {string} email.required
     * @property {string} password.required - Represents the params to authenticate a user
     */

     /**
     * @typedef UserAuthenticationResponse
     * @property {integer} token.required
     * @property {integer} id.required
     * @property {string} name.required
     * @property {string} email.required - Represents the response of a success authentication
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
        const eventEmitter = new EventEmitter();
        
        eventEmitter.on('success', userInformations => 
            response.status(200).json(userInformations)

        ).on('invalid-params', (error:string) => 
            response.status(422).json({ error: error })

        ).on('validation-error', (error:string) => 
            response.status(401).json({ error: error })
            
        ).on('error', (error: string) => 
            response.status(500).json({ error: error })
        );

        AuthService.authenticate(eventEmitter, {
            email,
            password
        });
    }
}

export default new AuthController();