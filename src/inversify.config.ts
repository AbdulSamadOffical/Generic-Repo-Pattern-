import { Container } from "inversify";
import TYPES from "./types";
import User from "./entities/interfaces/IUserEntity";
import IBaseRepository from "./Repository/interfaces/IBaseRepository";
import PostgreRepository from "./Repository/PostgreRepository";
import MongoRepository from "./Repository/MongoRepository";
import UserRepository from "./Repository/UserRepository";
import UserService from "./Services/UserService";
import UserController from "./controller/UserController";

var container = new Container();
container.bind<IBaseRepository<User>>(TYPES.IBaseRepositoryforMongo).to(MongoRepository<User>);
container.bind<IBaseRepository<User>>(TYPES.IBaseRepositoryforPostgre).to(PostgreRepository<User>);
container.bind<UserRepository>(TYPES.UserRepository).to(UserRepository)
container.bind<UserService>(TYPES.UserService).to(UserService)
container.bind<UserController>(TYPES.UserController).to(UserController)
export default container;