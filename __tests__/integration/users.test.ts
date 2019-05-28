import request from "../../source/wrappers/supertestsWrapper";
import server from "../../source/app";
import sequelize  from '../configurations/sequelize.configuration';

beforeAll(async ()=>{
    /**
     * Start the connection with database
     * (@force: true) to drop the tables every time when the app start
     */
    await sequelize.sync({force: true});
})

describe('list users - GET /users', () => {
    it('should return a list of users and 200 status', async () => {     
        const response = await request(server).get('/users');
        expect(response.status).toEqual(200);
        expect(response.text).toContain([]);

    });
});

describe('create - POST /users', () => {
    it('should response a sucess message and status 200 without errors when pass the correct args', async () => {

        const response = await request(server)
            .post('/users', { name: 'john', email: 'john@gmail.com', password: '123456' });

        expect(response.status).toEqual(200);

    });

    it('should response a error message with status 204 when not pass the corrects args', async () => {

        const response = await request(server)
            .post('/users', { name: 'john' });

        expect(response.status).toEqual(400);
        expect(response.text).toContain('errors');

    });
});