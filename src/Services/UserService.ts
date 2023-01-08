import container from "../inversify.config";
import IBaseRepository from "src/Repository/interfaces/IBaseRepository";
import User from "src/entities/interfaces/IUserEntity";
import TYPES from "../types";
import UserRepository from "../Repository/UserRepository";
// just an example 
import { inject, injectable } from 'inversify';

@injectable()
class UserService{
    userRepo:UserRepository;
    constructor(@inject(TYPES.UserRepository) userRepo: UserRepository){
        this.userRepo = userRepo 
    }

    async createUser():Promise<boolean>{
        console.log('userservice logic >>>>>>>>>>>>>>>>>>>>....')
        const data:boolean = await this.userRepo.execute({name:'samad',age: 23,profession:'developer', experience:'1 year', nationality:'pakistan'});
        return data;
    }
}

export default UserService