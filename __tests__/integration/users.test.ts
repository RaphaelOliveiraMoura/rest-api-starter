import * as request from "supertest";
const server = require('../../build/index.js');

beforeAll(() => {
    console.log('Tests for users initializing ...');
})

afterAll(() => {
    console.log('Users tests finished');
})

describe('users tests', () => {
    test('acess /users route and expect the list of users as return', async () => {
        const response = await request(server).get('/users');
        expect(response.status).toEqual(200);
    });
});