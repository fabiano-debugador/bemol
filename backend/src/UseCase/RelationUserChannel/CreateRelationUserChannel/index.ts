import { PostgresRelationUserChannelRepository } from "../../../repositories/implementations/PostgresRelationUserChannel";
import { CreateRelationUserChannelController } from "./CreateRelationUserChannelController";
import { CreateRelationUserChannelUseCase } from "./CreateRelationUserChannelUseCase";

const postgresRelatiolUserChannelRepository =
  new PostgresRelationUserChannelRepository();

const createRelationUserChannelUseCase = new CreateRelationUserChannelUseCase(
  postgresRelatiolUserChannelRepository
);

const createRelationUserChannelController =
  new CreateRelationUserChannelController(createRelationUserChannelUseCase);

export { createRelationUserChannelController };
