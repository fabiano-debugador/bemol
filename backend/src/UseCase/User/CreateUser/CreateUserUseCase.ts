import { User } from "../../../entities/Users";
import { ICreateUsers } from "../../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
  constructor(private userRepository: ICreateUsers) {}

  async execute(data: ICreateUserRequestDTO) {
    const client = new User(data);
    await this.userRepository.create(client);
  }
}
