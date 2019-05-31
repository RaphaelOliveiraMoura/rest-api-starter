import request from "supertest";
import { application } from "../../source/app";
import databaseConfiguration from '../configurations/sequelize.configuration';
import { User } from '../../source/models/User.interface';

const user: User = {
    name: 'teste',
    email: 'teste@gmail.com',
    password: '123456'
}

async function addUser(user: User): Promise<any> {
    return await request(application.express)
        .post('/api/v1/users')
        .set({
            'Accept': 'application/json'
        })
        .send(user);
}

async function authenticateUser(user: User): Promise<any> {
    if(user.name) user.name = undefined;
    return await request(application.express)
        .post('/api/v1/authenticate')
        .set({
            'Accept': 'application/json'
        })
        .send(user);
}

beforeAll(async () => {
    await application.syncDatabase(databaseConfiguration);
    const response = await addUser(user);
    expect(response.status).toEqual(200);
})


it('should authenticate a user with the corrects args', async () => {
    const response = await authenticateUser(user);
    expect(response.body).toHaveProperty('token');
    expect(response.status).toEqual(200);
});

it('should return a error when the user pass a wrong password or email', async () => {

    const wrongUser = {
        email: 'wrong@gmal.com',
        password: '123'
    };

    const response = await authenticateUser(wrongUser);
    expect(response.body).toHaveProperty('error');
    expect(response.status).toEqual(401);
});

it('should be a success request passing the JWT token to validation to another route', async () => {
    const authenticatedUser = await authenticateUser(user);
    const token = authenticatedUser.body.token;

    const response = await request(application.express)
        .get('/api/v1/users')
        .set({
            'Accept': 'application/json',
            'Authorization': token
        })

    expect(response.status).toEqual(200);

});

it('should be a failure request when dont pass the correct JWT token to another route', async () => {

    const response = await request(application.express)
        .get('/api/v1/users')
        .set({
            'Accept': 'application/json',
            'Authorization': '654das56as4d56a4'
        })

    expect(response.body).toHaveProperty('error');
    expect(response.status).toEqual(401);

});