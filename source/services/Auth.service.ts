import { EventEmitter } from "events";
import User from "../models/domains/User";
import UserRepository from "../models/repositories/User.repository";
import { validator } from '../utils/Validator';
import { sign } from 'jsonwebtoken';
const protectKey = require('../../../credentials.json').protectKey;

export default class AuthService extends EventEmitter{
    
    async authenticate(user: User){

        const { email, password } = user;
        
        try {
            validator(email, 'email', { minSize: 10, maxSize: 100 }).validate();
            validator(password, 'password', { minSize: 6, maxSize: 25 }).validate();
        } catch (error) {
            return this.emit('invalid-params', error);
        }

        try {
            const user = await UserRepository.findOne({
                where: { 'email':email, 'password':password }
            });

            if (!user)
                return this.emit('validation-error', 'Invalid credentials');

            const token = sign({
                data: user.id
            }, protectKey, { expiresIn: 60 * 60 });

            return this.emit('success', token);
        } catch (error) {
            return this.emit('error', 'Internal server error');
        }
    }
}