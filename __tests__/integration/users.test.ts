import request from "../../source/wrappers/supertestsWrapper";
import { application } from "../../source/app";
import databaseConfiguration from '../configurations/sequelize.configuration';

beforeAll(async () => {
    await application.syncDatabase(databaseConfiguration);
})

describe('list users - GET /users', () => {
    it('should return a list of users and 200 status', async () => {
        const response = await request(application).get('/users');
        expect(response.status).toEqual(200);
        expect(response.text).toContain([]);

    });
});

describe('create user - POST /users', () => {
    it('should response a sucess message and status 200 without errors when pass the correct args', async () => {

        const response = await request(application)
            .post('/users', { name: 'john', email: 'john@gmail.com', password: '123456' });

        expect(response.status).toEqual(200);

    });

    it('should response a error message with status 204 when not pass the corrects args', async () => {

        const response = await request(application)
            .post('/users', { name: 'john' });

        expect(response.status).toEqual(400);
        expect(response.text).toContain('errors');

    });
});
