import { Channel } from "../../../entities/Channel";
import { ICreateRepository } from "../../../repositories/IChannelRepository";
import { ICreateChannelRequestDTO } from "./CreateChannelDTO";

export class CreateChannelUseCase {
  constructor(private channelRepository: ICreateRepository) {}

  async execute(data: ICreateChannelRequestDTO) {
    const channel = new Channel(data);
    await this.channelRepository.create(channel);
  }
}
