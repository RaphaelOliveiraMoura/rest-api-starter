import { Request, Response, NextFunction } from 'express'

export default (request: Request, response: Response, next: NextFunction) => {

    const jwtToken = request.headers['authorization'];

    if(!jwtToken)
        return response.status(401).json({error: 'Should provide the JWT token'});

    if(jwtToken === '123')
        return next();

    return response.status(401).json({error: 'Error with JWT authentication'});

}