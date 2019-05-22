import { Request, Response } from "express";

class UserController{
    public list(request: Request, response: Response): void{
        response.status(200);
        response.send({
            id: 0,
            name: 'Raphael',
            email: 'raphaeldeoliveiramoura@gmail.com'
        });
    }
}

export default new UserController();