import { Request, Response } from "express";
import { GetRelationUserChannelByUserUseCase } from "./GetRelationUserChannelByUserUseCase";

export class GetRelationUserChannelByUserController {
  constructor(
    private getRelationUserChannelByUserUseCase: GetRelationUserChannelByUserUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { userId } = request.params;
    try {
      const relationUserChannelByUserchannels =
        await this.getRelationUserChannelByUserUseCase.execute({ userId });

      return response.status(200).send(relationUserChannelByUserchannels);
    } catch (error) {
      return response
        .status(400)
        .json({ message: error || "Unexpected error" });
    }
  }
}
