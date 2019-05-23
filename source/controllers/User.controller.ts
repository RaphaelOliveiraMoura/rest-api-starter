import { Request, Response } from "express";

class UserController {

    /**
    * @swagger
    * /users:
    *   get:
    *     tags:
    *       - Users
    *     name: List Users
    *     summary: list all users
    *     consumes:
    *       - application/json
    *     responses:
    *       '200':
    *         description: success request
    *       '400':
    *         description: failed in request
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
    * @swagger
    * /users:
    *   post:
    *     tags:
    *       - Users
    *     name: Create User
    *     summary: create a user
    *     consumes:
    *       - application/json
    *     parameters:
    *       - name: body
    *         in: body
    *         schema:
    *           type: object
    *           properties:
    *             name:
    *               type: string
    *             email:
    *               type: string
    *         required:
    *           - name
    *           - email
    *     responses:
    *       '200':
    *         description: success request
    *       '400':
    *         description: failed in request
    */
    public create(request: Request, response: Response): Response {

        if (!request.body.name || !request.body.email) {
            return response.status(400).json({ errors: 'missing arguments' });
        }

        return response.status(200).json({ message: 'user created' });
    }
}

export default new UserController();