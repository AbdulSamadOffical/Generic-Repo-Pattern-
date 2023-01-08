
import { inject,injectable } from "inversify";
import TYPES from "../types";
import User from "src/entities/interfaces/IUserEntity";
import IBaseRepository from "./interfaces/IBaseRepository";

@injectable()
class UserRepository{
   private userRepo: IBaseRepository<User>
    constructor( @inject(TYPES.IBaseRepositoryforPostgre) userRepo: IBaseRepository<User>){
         this.userRepo = userRepo
    }

    async execute(item:User): Promise<boolean>{
      console.log('user created>>>>>>>>>>>>>>>>>>>>>..')
      return this.userRepo.create(item);
    }
    
}
export default UserRepository