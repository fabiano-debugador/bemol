import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  constructor(private createProductCategoryUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
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
    } = request.body;

    try {
      await this.createProductCategoryUseCase.execute({
        login,
        password,
        name,
        cpf,
        zipCode,
        address,
        complement,
        city,
        uf,
      });

      return response.status(201).send();
    } catch (error: any) {
      return response
        .status(400)
        .json({ message: error.message || "Unexpected error" });
    }
  }
}
