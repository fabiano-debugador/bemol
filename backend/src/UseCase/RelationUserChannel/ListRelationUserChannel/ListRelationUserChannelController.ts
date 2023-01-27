import { Request, Response } from "express";
import { ListRelationUserChannelUseCase } from "./ListRelationUserChannelUseCase";

export class ListRelationUserChannelController {
  constructor(
    private listRelationUserChannelUseCase: ListRelationUserChannelUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const relationUserChannelchannels =
        await this.listRelationUserChannelUseCase.execute();

      return response.status(200).send(relationUserChannelchannels);
    } catch (error) {
      return response
        .status(400)
        .json({ message: error || "Unexpected error" });
    }
  }
}
