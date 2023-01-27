import { PostgresChannelRepository } from "../../../repositories/implementations/PostgresChannelRepository";
import { ListChannelController } from "./ListChannelController";
import { ListChannelUseCase } from "./ListChannelUseCase";

const postgresChannelRepository = new PostgresChannelRepository();

const createChannelUseCase = new ListChannelUseCase(postgresChannelRepository);

const listChannelController = new ListChannelController(createChannelUseCase);

export { listChannelController };
