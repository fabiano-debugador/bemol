import { User } from "../entities/Users";

export interface IUserRepository {
  getUsers(): Promise<User[]>;
  findByLogin(login: string): Promise<User | null>;
}

export interface ICreateUsers extends IUserRepository {
  create(data: User): Promise<void>;
}
