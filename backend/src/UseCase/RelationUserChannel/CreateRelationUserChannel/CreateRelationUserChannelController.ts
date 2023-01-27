import { Request, Response } from "express";
import { CreateRelationUserChannelUseCase } from "./CreateRelationUserChannelUseCase";

export class CreateRelationUserChannelController {
  constructor(
    private createRelationUserChannelUseCase: CreateRelationUserChannelUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { userId, listOfchannels } = request.body;

    try {
      await this.createRelationUserChannelUseCase.execute({
        userId,
        listOfchannels,
      });

      return response.status(201).send();
    } catch (error) {
      return response
        .status(400)
        .json({ message: error || "Unexpected error" });
    }
  }
}
