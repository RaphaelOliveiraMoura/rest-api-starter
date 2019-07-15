import { Request, Response, NextFunction } from 'express'
import { validate } from '../utils/jwtToken';

export default (request: Request, response: Response, next: NextFunction) => {

    const token = request.headers['authorization' || 'Authorization'];

    if (!token)
        return response.status(401).json({ error: 'Should provide the JWT token' });

    const tokenIsValid = validate(token);

    if(!tokenIsValid)
        return response.status(401).json({ error: 'Error with JWT authentication' });

    return next();

}