import { PostgresRelationUserChannelRepository } from "../../../repositories/implementations/PostgresRelationUserChannel";
import { UpdateRelationUserChannelController } from "./UpdateRelationUserChannelController";
import { UpdateRelationUserChannelUseCase } from "./UpdateRelationUserChannelUseCase";

const postgresRelatiolUserChannelRepository =
  new PostgresRelationUserChannelRepository();

const updateRelationUserChannelUseCase = new UpdateRelationUserChannelUseCase(
  postgresRelatiolUserChannelRepository
);

const updateRelationUserChannelController =
  new UpdateRelationUserChannelController(updateRelationUserChannelUseCase);

export { updateRelationUserChannelController };
