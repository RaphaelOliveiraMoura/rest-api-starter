import { application } from "../../source/app";
import Database from '../../database';
import { test } from '../../database/configurations';

// Request Utils
import AuthRequester from './requesters/auth.requester';
import UserRequester from './requesters/user.requester';

// Interfaces
import User from '../../source/models/User';

const authRequester = new AuthRequester(application.express);
const userRequester = new UserRequester(application.express);

const user: User = {
    name: 'teste',
    email: 'teste@gmail.com',
    password: '123456'
}

beforeAll(async () => {
    await Database.getInstance(test).sync();
    const response = await userRequester.create(user);
    expect(response.status).toEqual(200);
})


it('should authenticate a user with the corrects args', async () => {
    const response = await authRequester.authenticate(user);
    expect(response.body).toHaveProperty('token');
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
    const response = await userRequester.list(token);
    expect(response.status).toEqual(200);
});

it('should be a failure request when dont pass the correct JWT token to another route', async () => {
    const response = await userRequester.list('saddasd5a4sda5s4');
    expect(response.body).toHaveProperty('error');
    expect(response.status).toEqual(401);
});