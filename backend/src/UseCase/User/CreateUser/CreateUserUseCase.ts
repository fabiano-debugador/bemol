import { User } from "../../../entities/Users";
import { ICreateUsers } from "../../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
  constructor(private userRepository: ICreateUsers) {}

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.userRepository.findByLogin(data.login);

    if (userAlreadyExists) {
      throw new Error("Login já existe.");
    }

    const client = new User(data);
    await this.userRepository.create(client);
  }
}
