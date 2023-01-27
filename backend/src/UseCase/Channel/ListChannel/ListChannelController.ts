import { Request, Response } from "express";
import { ListChannelUseCase } from "./ListChannelUseCase";

export class ListChannelController {
  constructor(private listChannelUseCase: ListChannelUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const channels = await this.listChannelUseCase.execute();

      return response.status(200).send(channels);
    } catch (error) {
      return response
        .status(400)
        .json({ message: error || "Unexpected error" });
    }
  }
}
