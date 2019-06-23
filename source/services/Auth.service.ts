import { EventEmitter } from "events";
import { UserRepository, User } from '../models/User';
import { validator } from '../utils/validator';
import { generateToken } from '../utils/jwtToken';

class AuthService{
    
    async authenticate(eventEmitter: EventEmitter, user: User){
        try {
            await this.validateParams(user);
            await this.verifyIfUserExists(user);
            const token = await this.generateJWTToken(user.id!);
            return eventEmitter.emit('success', token);
        } catch (error) {
            const { type, description } = error;
            return eventEmitter.emit(type, description);
        } 
    }

    private async validateParams(user: User){    
        try {
            const { email, password } = user;
            validator(email, 'email', { minSize: 10, maxSize: 100 }).validate();
            validator(password, 'password', { minSize: 6, maxSize: 25 }).validate();
        } catch (error) {
            throw { type: 'invalid-params', description: error };
        }
    }

    private async verifyIfUserExists(user: User){
        const { email, password } = user;

        const existUser = await UserRepository.findOne({
            where: { 'email':email!, 'password':password! }
        }).catch(()=>{
            throw { type: 'error', description: 'Error fetching user' };
        });

        if (!existUser) throw { type: 'validation-error', description: 'Invalid credentials' };
    }

    private async generateJWTToken(id: number){
        try {
            const token = generateToken(id);
            return token;
        } catch (error) {
            throw { type: 'error', description: 'Error generating token' };
        }
    }
}

export default new AuthService();