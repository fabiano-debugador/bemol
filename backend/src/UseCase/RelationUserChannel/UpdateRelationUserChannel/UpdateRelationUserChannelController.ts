import { Request, Response } from "express";
import { UpdateRelationUserChannelUseCase } from "./UpdateRelationUserChannelUseCase";

export class UpdateRelationUserChannelController {
  constructor(
    private updateRelationUserChannelUseCase: UpdateRelationUserChannelUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { userId, listOfchannels } = request.body;

    try {
      const updatedData = await this.updateRelationUserChannelUseCase.execute({
        id,
        userId,
        listOfchannels: JSON.stringify(listOfchannels),
      });
      return response.status(200).send(updatedData);
    } catch (error: any) {
      return response.status(400).json({
        message: error.message || "Unexpected error",
      });
    }
  }
}
