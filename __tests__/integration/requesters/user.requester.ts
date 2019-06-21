import application from "../../../source/app";
import request from "supertest";
import { User } from '../../../source/models/User.Repository';

async function create(user: User) {
    return await request(application.express)
        .post('/api/v1/users')
        .set({
            'Accept': 'application/json'
        })
        .send(user);
}

async function list(token: string) {
    return await request(application.express)
        .get('/api/v1/users')
        .set({
            'Accept': 'application/json',
            'Authorization': token
        })
}

export default {
    create,
    list
}