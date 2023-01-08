import IBaseRepository from "./interfaces/IBaseRepository";
import { injectable } from "inversify";

@injectable()
class MongoRepository<T> implements IBaseRepository<T> {

    async create(item:T): Promise<boolean>{
     // User created Sucessfully
     console.log('Mongo repo')
     return false
    }

    async update(id: string, item: T): Promise<boolean>{
        return true;
    }
    async delete(id: string): Promise<boolean>{
        return true
    }
    async find(item: T): Promise<T[]>{
        throw new Error('Method not implemented!')
    }
    async findOne(id: string): Promise<T>{
        throw new Error('Method not implemented!')
    }
}

export default MongoRepository