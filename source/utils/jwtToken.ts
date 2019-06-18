import { sign, verify } from 'jsonwebtoken';

const protectKey = require('../../credentials.json').secret;

export const generateToken = (id: string|number) => {
    return sign({
        'data': id
    }, protectKey, { expiresIn: 60 * 60 });
}

export const validate = ( token: string ) => {
    return verify(token, protectKey);
}