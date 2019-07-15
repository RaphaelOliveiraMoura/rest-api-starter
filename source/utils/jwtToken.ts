import { sign, verify } from 'jsonwebtoken';
import path from 'path';

const EXPIRATION_TOKEN_TIME = 60 * 60;

const credentialsPath = path.resolve('credentials.json');
const protectKey = require(credentialsPath).secret;

export const generateToken = function (id: string|number) {
    return sign({
        'data': id
    }, protectKey, { expiresIn: EXPIRATION_TOKEN_TIME });
}

export const validate = function ( token: string ): boolean {
    try {
        const tokenIsValid = verify(token, protectKey);
        return !!tokenIsValid;
    } catch (error) {
        return false;
    }
}