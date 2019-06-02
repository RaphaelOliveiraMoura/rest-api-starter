import { EventEmitter } from "events";
import User from "../models/domains/User";
import UserRepository from "../models/repositories/User.repository";
import { validator } from '../utils/validator'

export default class UserService extends EventEmitter{
    
    async createUser(user: User){
        
        try {
            validator(user.name, 'name', { minSize: 2, maxSize: 25, hasNumbers: false }).validate();
            validator(user.email, 'email', { minSize: 10, maxSize: 100 }).validate();
            validator(user.password, 'password', { minSize: 6, maxSize: 25 }).validate();
        } catch (error) {
            return this.emit('invalid-params', error);
        }

        try {
            const createdUser:any = await UserRepository.create(user);
            if(!createdUser)
                return this.emit('error', 'Error saving user'); 
            createdUser.password = undefined;
            return this.emit('success', createdUser);
        } catch (error) {
            return this.emit('error', 'Internal server error');
        }

    }

}