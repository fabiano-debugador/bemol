import { PostgresChannelRepository } from "../../../repositories/implementations/PostgresChannelRepository";
import { CreateChannelController } from "./CreateChannelController";
import { CreateChannelUseCase } from "./CreateChannelUseCase";

const postgresChannelRepository = new PostgresChannelRepository();

const createChannelUseCase = new CreateChannelUseCase(
  postgresChannelRepository
);

const createChannelController = new CreateChannelController(
  createChannelUseCase
);

export { createChannelController };
