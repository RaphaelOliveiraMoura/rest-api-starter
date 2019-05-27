import { Request, Response } from "express";

class UserController {


    /**
     * @route GET /users
     * @group Users
     * @returns {object} 200 - An array of user info
     * @returns {Error}  default - Unexpected error
     */
    public list(request: Request, response: Response): void {

        response.status(200);
        response.json([{
            id: 0,
            name: 'Raphael',
            email: 'raphaeldeoliveiramoura@gmail.com'
        }]);
    }

    /**
     * @typedef UserCreationModel
     * @property {string} name.required
     * @property {string} email.required - This is a model that represent information about the creation of users
     */

    /**
     * @route POST /users
     * @group Users
     * @param {UserCreationModel.model} user.body.required - user
     * @consumes application/json
     * @produces application/json
     * @returns {object} 200 - return the id of created user
     * @returns {Error}  default - failed in request
     */
    public create(request: Request, response: Response): Response {

        if (!request.body.name || !request.body.email) {
            return response.status(400).json({ errors: 'missing arguments' });
        }   

        return response.status(200).json({ message: 'user created' });
    }
}

export default new UserController();