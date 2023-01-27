import { Channel } from "../entities/Channel";

export interface IChannelRepository {
  getChannels(): Promise<Channel[]>;
}

export interface ICreateRepository extends IChannelRepository {
  create(data: Channel): Promise<void>;
}
