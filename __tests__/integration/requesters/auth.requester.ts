import request from "supertest";
import { Application } from 'express';
import { User } from '../../../source/models/UserInterface';

export default class AuthRequest {
    
    private express: Application;

    constructor(express: Application) {
        this.express = express;
    }

    async authenticate(user: User){
        return await request(this.express)
        .post('/api/v1/authenticate')
        .set({
            'Accept': 'application/json'
        })
        .send({
            'email': user.email,
            'password': user.password
        });
    }
}