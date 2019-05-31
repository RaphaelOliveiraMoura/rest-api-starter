import request from "supertest";
import { Application } from 'express';
import { User } from '../../../source/models/UserInterface';

export default class UserRequest {

    constructor(private express: Application) {

    }

    async create(user: User) {
        return await request(this.express)
            .post('/api/v1/users')
            .set({
                'Accept': 'application/json'
            })
            .send(user);
    }

    async list(token: string) {
        return await request(this.express)
            .get('/api/v1/users')
            .set({
                'Accept': 'application/json',
                'Authorization': token
            })
    }
}