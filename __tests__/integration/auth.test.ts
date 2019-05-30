import request from "supertest";
import { application } from "../../source/app";
import databaseConfiguration from '../configurations/sequelize.configuration';

beforeAll(async () => {
    await application.syncDatabase(databaseConfiguration);
})

describe('creating a user in the database', () => {
    it('should create a user passing the corrects args', async () => {

        const user = {
            name: 'teste',
            email: 'teste@gmail.com',
            password: '123456'
        }

        const response = await request(application.express)
            .post('/api/v1/users')
            .set({
                'Accept': 'application/json'
            })
            .send(user);

        expect(response.status).toEqual(200);

    });
});

describe('testing the success authentication of the user', () => {
    it('should authenticate the user returning a JWT token and verify if the token works in another route', async () => {

        const user = {
            email: 'teste@gmail.com',
            password: '123456'
        }

        const response = await request(application.express)
            .post('/api/v1/authenticate')
            .set({
                'Accept': 'application/json'
            })
            .send(user);

        expect(response.body).toContain('token');
        expect(response.status).toEqual(200);

        const jwtUserToken = response.body.token;

        it('should be a success request passing the JWT token to validation in another route', async () => {

            const response = await request(application.express)
                .get('/api/v1/users')
                .set({
                    'Accept': 'application/json',
                    'Authorization': jwtUserToken
                })
    
            expect(response.status).toEqual(200);
    
        });
    
        it('should be a failure request when dont pass the correct JWT token', async () => {
    
            const response = await request(application.express)
                .get('/api/v1/users')
                .set({
                    'Accept': 'application/json',
                    'Authorization': '654das56as4d56a4'
                })
    
            expect(response.body).toContain('error');
            expect(response.status).toEqual(401);
    
        });
    });
});

describe('testing the failure authentication of the user', () => {
    it('should return a error when the user pass a wrong password', async () => {

        const user = {
            email: 'teste@gmail.com',
            password: '5555'
        }

        const response = await request(application.express)
            .post('/api/v1/authenticate')
            .set({
                'Accept': 'application/json'
            })
            .send(user);

        expect(response.body).toContain('error');
        expect(response.status).toEqual(401);
    });

    it('should return a error when the user pass a invalid email', async () => {

        const user = {
            email: 'invalid@gmail.com',
            password: '5555'
        }

        const response = await request(application.express)
            .post('/api/v1/authenticate')
            .set({
                'Accept': 'application/json'
            })
            .send(user);

        expect(response.body).toContain('error');
        expect(response.status).toEqual(401);
    });
});
