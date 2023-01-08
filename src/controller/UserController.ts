import { inject, injectable } from "inversify";
import TYPES from "../../src/types";

import UserService from "../Services/UserService";
@injectable()
class UserController {
    userService:UserService   
    constructor(@inject(TYPES.UserService) userService:UserService){
       this.userService = userService
    }
    async getController(req,res, next):Promise<any>{
        const data = await this.userService.createUser()
        return res.status(200).json({message: data})
    }
}
export default UserController