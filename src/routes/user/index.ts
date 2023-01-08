import {Router} from 'express';
import { inject } from 'inversify';
import UserController from 'src/controller/UserController';
import User from 'src/entities/interfaces/IUserEntity';
import container from '../../inversify.config';
import IBaseRepository from 'src/Repository/interfaces/IBaseRepository';
import UserService from 'src/Services/UserService';
import TYPES from '../../types';
const router = Router();

class Routes {
    userController: UserController
    constructor(){
        this.userController= container.get<UserController>(TYPES.UserController);
    }
    async getUsers (req, res, next){
        await this.userController.getController(req, res, next)
    }
}
var routes = new Routes();

router.get('/', routes.getUsers.bind(routes))


export default router