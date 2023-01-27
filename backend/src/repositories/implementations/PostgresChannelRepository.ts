import { PrismaClient } from "@prisma/client";
import { Channel } from "../../entities/Channel";
import { IChannelRepository } from "../IChannelRepository";

const prisma = new PrismaClient();

export class PostgresChannelRepository implements IChannelRepository {
  async create(data: Channel): Promise<void> {
    const { name, type } = data;

    await prisma.channels.create({
      data: {
        name,
        type,
      },
    });
  }

  async getChannels(): Promise<Channel[]> {
    const channels = await prisma.channels.findMany({});

    return channels;
  }
}
