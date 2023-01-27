import { IUserRepository } from "../../../repositories/IUsersRepository";

export class ListUserUseCase {
  constructor(private clientsRepository: IUserRepository) {}

  async execute() {
    const clientSearch = await this.clientsRepository.getUsers();
    return clientSearch;
  }
}
