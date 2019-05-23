import supertest from "supertest";
import { Application } from 'express';
import configuration from '../../__tests__/integration/configuration';

class SuperTestWrapper {

    private server: Application;

    constructor(server: Application) {
        this.server = server;
    }

    async get(route: string) {
        return await supertest(this.server)
            .get(`${configuration.endpoint}${route}`)
            .set('Accept', 'application/json');
    }

    async post(route: string, body: {}) {
        return await supertest(this.server)
            .post(`${configuration.endpoint}${route}`)
            .send(body)
            .set('Accept', 'application/json');
    }

}

export default (server: Application) => new SuperTestWrapper(server);