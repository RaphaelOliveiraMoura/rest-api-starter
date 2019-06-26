import authRequester from './requesters/auth.requester';
import userRequester from './requesters/user.requester';
import { UserRepository, User } from '../../source/models/User';

const user: User = {
    name: 'teste',
    email: 'teste@gmail.com',
    password: '123456'
}

beforeAll(async () => {
    await (<any>UserRepository).destroy({ 'truncate': { 'cascade': true } });
    const response = await userRequester.create(user);
    expect(response.status).toEqual(200);
})


it('should authenticate a user with the corrects args', async () => {
    const response = await authRequester.authenticate(user);
    expect(response.body).toHaveProperty('token');
    expect(response.body).toHaveProperty('email');
    expect(response.body).toHaveProperty('name');
    expect(response.body).toHaveProperty('rules');
    expect(response.status).toEqual(200);
});

it('should return a error when the user pass a wrong password or email', async () => {

    const wrongUser = {
        email: 'wrong@gmal.com',
        password: '123456'
    };

    const response = await authRequester.authenticate(wrongUser);
    expect(response.body).toHaveProperty('error');
    expect(response.status).toEqual(401);
});

it('should be a success request passing the JWT token to validation to another route', async () => {
    const authenticatedUser = await authRequester.authenticate(user);
    const token = authenticatedUser.body.token;
    const response = await userRequester.list({ token });
    expect(response.status).toEqual(200);
});

it('should be a failure request when dont pass the correct JWT token to another route', async () => {
    const response = await userRequester.list({ token: 'dasdasda5sd16as1d5' });
    expect(response.body).toHaveProperty('error');
    expect(response.status).toEqual(401);
});