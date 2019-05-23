import { Request, Response } from "express";

class UserController{
    public list(request: Request, response: Response): void{

        response.status(200);
        response.json([{
            id: 0,
            name: 'Raphael',
            email: 'raphaeldeoliveiramoura@gmail.com'
        }]);
    }

    public create(request: Request, response: Response): void{

        if(!request.body.name || !request.body.email) {
            response.status(400).json({ errors: 'missing arguments' });
        }
        
        response.status(200).json({message: 'user created'});
    }
}

export default new UserController();