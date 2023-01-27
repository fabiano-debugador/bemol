import { PrismaClient } from "@prisma/client";
import { User } from "../../entities/Users";
import { IUserRepository } from "../IUsersRepository";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

export class PostgresUsertRepository implements IUserRepository {
  async create(data: User): Promise<void> {
    const {
      login,
      password,
      name,
      cpf,
      zipCode,
      address,
      complement,
      city,
      uf,
    } = data;

    const passwordHash = await hash(password, 8);

    const user = await prisma.users.create({
      data: {
        login,
        password: passwordHash,
        name,
        cpf,
        zipCode,
        address,
        complement,
        city,
        uf,
      },
    });
  }

  async getUsers(): Promise<User[]> {
    const product = await prisma.users.findMany({});

    return product;
  }
}
