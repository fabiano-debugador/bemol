import { IChannelRepository } from "../../../repositories/IChannelRepository";

export class ListChannelUseCase {
  constructor(private channelRepository: IChannelRepository) {}

  async execute() {
    const channelRepository = await this.channelRepository.getChannels();
    return channelRepository;
  }
}
