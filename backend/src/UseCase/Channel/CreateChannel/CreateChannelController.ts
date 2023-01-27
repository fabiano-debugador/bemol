import { Request, Response } from "express";
import { CreateChannelUseCase } from "./CreateChannelUseCase";

export class CreateChannelController {
  constructor(private createChannelUseCase: CreateChannelUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, type } = request.body;

    try {
      await this.createChannelUseCase.execute({
        name,
        type,
      });

      return response.status(201).send();
    } catch (error) {
      return response
        .status(400)
        .json({ message: error || "Unexpected error" });
    }
  }
}
