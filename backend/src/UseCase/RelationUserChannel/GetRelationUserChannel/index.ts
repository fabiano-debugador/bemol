import { PostgresRelationUserChannelRepository } from "../../../repositories/implementations/PostgresRelationUserChannel";
import { GetRelationUserChannelByUserController } from "./GetRelationUserChannelByUserController";
import { GetRelationUserChannelByUserUseCase } from "./GetRelationUserChannelByUserUseCase";

const postgresRelatiolUserChannelRepository =
  new PostgresRelationUserChannelRepository();

const getRelationUserChannelByUseCase = new GetRelationUserChannelByUserUseCase(
  postgresRelatiolUserChannelRepository
);

const getRelationUserChannelByUserController =
  new GetRelationUserChannelByUserController(getRelationUserChannelByUseCase);

export { getRelationUserChannelByUserController };
