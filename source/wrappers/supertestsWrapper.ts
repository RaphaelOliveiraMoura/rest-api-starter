import supertest from "supertest";
import { ApplicationController } from '../app';
import configuration from '../configuration/application.configuration';

class SuperTestWrapper {

    constructor(private server: ApplicationController) {
        this.server = server;
    }

    async get(route: string): Promise<any> {
        return supertest(this.server.express)
            .get(`${configuration.endpoint}${route}`)
            .set('Accept', 'application/json');
    }

    async post(route: string, body: {}): Promise<any> {
        return supertest(this.server.express)
            .post(`${configuration.endpoint}${route}`)
            .send(body)
            .set('Accept', 'application/json');
    }

}

export default (server: ApplicationController) => new SuperTestWrapper(server);