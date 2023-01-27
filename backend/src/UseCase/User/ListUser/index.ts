import { PostgresUsertRepository } from "../../../repositories/implementations/PostgresUsersRepository";
import { ListUserController } from "./ListUserController";
import { ListUserUseCase } from "./ListUserUseCase";

const postgresUserRepository = new PostgresUsertRepository();

const listUserUseCase = new ListUserUseCase(postgresUserRepository);

const listUserController = new ListUserController(listUserUseCase);

export { listUserController };
