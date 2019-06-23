import { EventEmitter } from "events";
import { validator } from '../utils/validator'
import { UserRepository, User } from '../models/User'

class UserService {

    async createUser(eventEmitter: EventEmitter, user: User): Promise<boolean> {
        try {
            await this.verifyParams(user);
            await this.verifyIfUserAlreadyExists(user);
            const createdUser = await this.saveUser(user);
            return eventEmitter.emit('success', createdUser);
        } catch (error) {
            const { type, description } = error;
            return eventEmitter.emit(type, description);
        }
    }

    async listUsers(eventEmitter: EventEmitter): Promise<boolean> {
        try {
            const users = await this.getAllUsers();
            return eventEmitter.emit('success', users);
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
            throw { type: 'invalid-params', description: error };
        }
    }

    private async verifyIfUserAlreadyExists(user: User){
        const { email } = user;

        const existUser = await UserRepository.findOne({
            where: { 'email': email! }
        }).catch(()=>{
            throw { type: 'error', description: 'Error fetching user' };
        });

        if(existUser){
            throw { type: 'invalid-params', description: 'User already exists' };
        }
    }

    private async saveUser(user: User): Promise<User>{
        try {
            const createdUser:User = await UserRepository.create(user);
            createdUser.password = undefined;
            return createdUser;
        } catch (error) {
            throw { type: 'error', description: 'Error saving user' };
        }
    }

    private async getAllUsers(){
        const users = await UserRepository.findAll().catch(()=>{
            throw { type: 'error', description: 'Error fetching users' };
        });
        return users;
    }

}

export default new UserService();