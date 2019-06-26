import authRequester from './requesters/auth.requester';
import userRequester from './requesters/user.requester';
import { UserRepository, User } from '../../source/models/User';

const user: User = {
    name: 'john',
    email: 'john@gmail.com',
    password: '123456'
}

beforeAll(async () => {
    await (<any>UserRepository).destroy({ 'truncate': { 'cascade': true } });
})

describe('POST /users', async () => {
    await it('should response a success message and status 200 without errors when pass the correct args', async () => {
        const response = await userRequester.create(user);
        expect(response.status).toEqual(200);
        expect(response.body).not.toHaveProperty('error');
        expect(response.body).toHaveProperty('id');
        expect(response.body).toHaveProperty('email');
        expect(response.body).toHaveProperty('name');
        expect(response.body).not.toHaveProperty('password');
    });

    await it('should response a error message with status 400 when not pass the corrects args', async () => {

        const wrongUser = {
            name: 'john',
            email: 'john@gmail.com'
        }

        const response = await userRequester.create(wrongUser);
        expect(response.status).toEqual(400);
        expect(response.body).toHaveProperty('error');
    });

    await it('should response a error when try create a user with a already existing email', async () => {

    });
});

describe('GET /users', async () => {
    await it('should return a list of users and 200 status', async () => {

        const { body } = await authRequester.authenticate({
            'email': user.email,
            'password': user.password
        });

        const response = await userRequester.list({ token: body.token });
        expect(response.status).toEqual(200);
        expect(response.text).toContain([]);
    });
});

describe('PUT /users', async () => {
    await it('should update a user when pass correct args', async () => {

    });

    await it('should be a error request when pass wrong arguments in body to update a user', async () => {

    });

    await it('should be a error request when try update a user that dont exist', async () => {

    });
});

describe('DELETE /users', async () => {
    await it('should be a success request deleting a user', async () => {

    });

    await it('should be a error when try delete a user that dont exist', async () => {

    });
});
