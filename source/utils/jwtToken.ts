import { sign, verify } from 'jsonwebtoken';

import path from 'path';
const credentialsPath = path.resolve('credentials.json');
const protectKey = require(credentialsPath).secret;

export const generateToken = (id: string|number) => {
    return sign({
        'data': id
    }, protectKey, { expiresIn: 60 * 60 });
}

export const validate = ( token: string ) => {
    return verify(token, protectKey);
}