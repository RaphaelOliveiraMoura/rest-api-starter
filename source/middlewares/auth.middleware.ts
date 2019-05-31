import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken';
const protectKey = require('../../../credentials.json').protectKey;

export default (request: Request, response: Response, next: NextFunction) => {

    const userJwtToken = request.headers['authorization'];

    if (!userJwtToken)
        return response.status(401).json({ error: 'Should provide the JWT token' });

    try {
        if (verify(userJwtToken, protectKey)) return next();
    } catch (error) {
        return response.status(401).json({ error: 'Error with JWT authentication' });
    }

}