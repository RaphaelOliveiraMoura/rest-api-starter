import { Request, Response } from "express";

class UserController {


    /**
     * This function comment is parsed by doctrine
     * @route GET /api
     * @group foo - Operations about user
     * @param {string} email.query.required - username or email
     * @param {string} password.query.required - user's password.
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

    public create(request: Request, response: Response): Response {

        if (!request.body.name || !request.body.email) {
            return response.status(400).json({ errors: 'missing arguments' });
        }

        return response.status(200).json({ message: 'user created' });
    }
}

export default new UserController();