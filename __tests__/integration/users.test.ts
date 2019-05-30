import request from "supertest";
import { application } from "../../source/app";
import databaseConfiguration from '../configurations/sequelize.configuration';
import { User } from '../../source/models/User.interface';

const user: User = {
    name: 'john',
    email: 'john@gmail.com',
    password: '123456'
}

beforeAll(async () => {
    await application.syncDatabase(databaseConfiguration);
})

it('should return a list of users and 200 status', async () => {
    const response = await request(application.express)
        .get('/api/v1/users')
        .set({
            'Accept': 'application/json',
            'Authorization': '123'
        })

    expect(response.status).toEqual(200);
    expect(response.text).toContain([]);
});

it('should response a success message and status 200 without errors when pass the correct args', async () => {
    const response = await request(application.express)
        .post('/api/v1/users')
        .set({
            'Accept': 'application/json'
        })
        .send(user);

    expect(response.status).toEqual(200);

});

it('should response a error message with status 400 when not pass the corrects args', async () => {

    const wrongUser = {
        name: 'john',
        email: 'john@gmail.com'
    }

    const response = await request(application.express)
        .post('/api/v1/users')
        .set({
            'Accept': 'application/json'
        })
        .send(wrongUser);

    expect(response.status).toEqual(400);
    expect(response.text).toContain('error');

});
