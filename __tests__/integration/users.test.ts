import request from "supertest";
import server from "../../source/index";

beforeAll(() => {
    console.log('Tests for users initializing ...');
})

afterAll(() => {
    server.close(); 
    console.log('Users tests finished and server closed ...');
})

describe('users tests', () => {
    it('should access /users route and expect the list of users as return', async () => {
        const response = await request(server).get('/users');
        expect(response.status).toEqual(200);
        
    });
});