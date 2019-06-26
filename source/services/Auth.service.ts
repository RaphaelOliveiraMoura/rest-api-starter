import { EventEmitter } from "events";
import { UserRepository, User } from '../models/User';
import { validator } from '../utils/validator';
import { generateToken } from '../utils/jwtToken';
import { compare } from "../utils/crypter";
import { emitError, emitSuccess } from "../utils/emitterHelper";

class AuthService{
    
    async authenticate(eventEmitter: EventEmitter, userInput: User){
        try {
            await this.validateUserInputParameters(userInput);
            const user = await this.verifyIfUserExistAndReturnUserInformations(userInput);
            await this.compareUserInputPasswordWithEncryptPassword({
                'userInputPassword': userInput.password,
                'userEncryptPassword': user.password
            });
            const token = await this.generateAndReturnJWTToken(user.id!);
            return emitSuccess(eventEmitter, {
                token,
                'id': user.id,
                'name': user.name,
                'email': user.email,
                'rules': []
            });
        } catch (error) {
            return emitError(eventEmitter, error);
        }
    }

    private async validateUserInputParameters(user: User): Promise<void>{    
        try {
            const { email, password } = user;
            validator(email, 'email', { minSize: 10, maxSize: 100 }).validate();
            validator(password, 'password', { minSize: 6, maxSize: 25 }).validate();
        } catch (error) {
            throw { type: 'invalid-params', description: error };
        }
    }

    private async verifyIfUserExistAndReturnUserInformations(user: User): Promise<User>{
        const { email } = user;

        const existUser = await UserRepository.findOne({
            where: { 'email':email! }
        }).catch(()=>{
            throw { type: 'error', description: 'Error fetching user' };
        });

        if (!existUser) throw { type: 'validation-error', description: 'User dont exist' };
        return existUser;
    }

    private async compareUserInputPasswordWithEncryptPassword(params: any): Promise<void>{
        const { userInputPassword, userEncryptPassword } = params;
        const correctPassword = compare(userEncryptPassword, userInputPassword);
        if (!correctPassword) throw { type: 'validation-error', description: 'Invalid password' };
    }

    private async generateAndReturnJWTToken(userId: number): Promise<string>{
        try {
            const token = generateToken(userId);
            return token;
        } catch (error) {
            throw { type: 'error', description: 'Error generating token' };
        }
    }
}

export default new AuthService();