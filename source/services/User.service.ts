import { EventEmitter } from "events";
import { validator } from '../utils/validator'
import { UserRepository, User } from '../models/User'

export default class UserService extends EventEmitter {

    async createUser(user: User) {

        try {
            validator(user.name, 'name', { minSize: 2, maxSize: 25, hasNumbers: false }).validate();
            validator(user.email, 'email', { minSize: 10, maxSize: 100 }).validate();
            validator(user.password, 'password', { minSize: 6, maxSize: 25 }).validate();
        } catch (error) {
            return this.emit('invalid-params', error);
        }

        const existUser = await UserRepository.findOne({
            where: { 'email': user.email! }
        });

        if(existUser){
            return this.emit('invalid-params', 'User already exists');
        }

        try {
            const createdUser: User = await UserRepository.create(user);
            if (!createdUser)
                return this.emit('error', 'Error saving user');
            createdUser.password = undefined;
            return this.emit('success', createdUser);
        } catch (error) {
            return this.emit('error', 'Internal server error');
        }

    }

}