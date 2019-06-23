import { EventEmitter } from "events";
import { validator } from '../utils/validator'
import { UserRepository, User } from '../models/User'

export default class UserService {

    async createUser(eventEmitter: EventEmitter, user: User): Promise<boolean|void> {

        try {
            await this.verifyParams(user).catch((error)=>{
                throw { type: 'invalid-params', description: error };
            });
    
            await this.verifyIfUserAlreadyExists(user).catch((error)=>{
                throw { type: 'invalid-params', description: error };
            });
    
            const createdUser = await this.saveUser(user).catch((error)=>{
                throw { type: 'error', description: error };
            });

            return eventEmitter.emit('success', createdUser);
        } catch (error) {
            const { type, description } = error;
            return eventEmitter.emit(type, description);
        }
    }

    private async verifyParams(userParams: User){
        const { name, email, password } = userParams;
        try {
            validator(name, 'name', { minSize: 2, maxSize: 25, hasNumbers: false }).validate();
            validator(email, 'email', { minSize: 10, maxSize: 100 }).validate();
            validator(password, 'password', { minSize: 6, maxSize: 25 }).validate();
        } catch (error) {
            throw error;
        }
    }

    private async verifyIfUserAlreadyExists(userParams: User){
        const { email } = userParams;

        const existUser = await UserRepository.findOne({
            where: { 'email': email! }
        });

        if(existUser){
            throw 'User already exists';
        }
    }

    private async saveUser(user: User){
        try {
            const createdUser:User = await UserRepository.create(user);
            createdUser.password = undefined;
            return createdUser;
        } catch (error) {
            throw 'Error saving user';
        }
    }

}