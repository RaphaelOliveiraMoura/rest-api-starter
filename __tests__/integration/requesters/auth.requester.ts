import application from "../../../source/app";
import request from "supertest";
import { User } from '../../../source/models/User.Repository';

async function authenticate(user: User) {
    return await request(application.express)
        .post('/api/v1/authenticate')
        .set({
            'Accept': 'application/json'
        })
        .send({
            'email': user.email,
            'password': user.password
        });
}

export default {
    authenticate
}