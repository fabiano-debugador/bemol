import { PostgresRelationUserChannelRepository } from "../../../repositories/implementations/PostgresRelationUserChannel";
import { ListRelationUserChannelController } from "./ListRelationUserChannelController";
import { ListRelationUserChannelUseCase } from "./ListRelationUserChannelUseCase";

const postgresRelatiolUserChannelRepository =
  new PostgresRelationUserChannelRepository();

const listRelationUserChannelUseCase = new ListRelationUserChannelUseCase(
  postgresRelatiolUserChannelRepository
);

const listRelationUserChannelController = new ListRelationUserChannelController(
  listRelationUserChannelUseCase
);

export { listRelationUserChannelController };
