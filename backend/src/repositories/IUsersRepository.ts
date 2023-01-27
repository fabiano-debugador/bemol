import { User } from "../entities/Users";

export interface IUserRepository {
  getUsers(): Promise<User[]>;
}

export interface ICreateUsers extends IUserRepository {
  create(data: User): Promise<void>;
}
