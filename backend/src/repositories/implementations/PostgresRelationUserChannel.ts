import { PrismaClient } from "@prisma/client";
import { RelationUserChannel } from "../../entities/RelationUserChannel";
import { IRelationUserChannelRepository } from "../IRelationUserChannel";

const prisma = new PrismaClient();

export class PostgresRelationUserChannelRepository
  implements IRelationUserChannelRepository
{
  async create(data: RelationUserChannel): Promise<void> {
    const { userId, listOfchannels } = data;

    await prisma.relationUsersChanels.create({
      data: {
        userId,
        listOfchannels: JSON.stringify(listOfchannels),
      },
    });
  }

  async getRelation(): Promise<RelationUserChannel[]> {
    const relation = await prisma.relationUsersChanels.findMany({});
    return relation;
  }

  async getRelationById(userId: string): Promise<RelationUserChannel | null> {
    const relation = await prisma.relationUsersChanels.findFirst({
      where: {
        userId,
      },
    });
    return relation;
  }

  async update(data: RelationUserChannel): Promise<RelationUserChannel> {
    const { id, listOfchannels } = data;
    const updatedData = await prisma.relationUsersChanels.update({
      where: {
        id,
      },
      data: {
        listOfchannels,
      },
    });

    return updatedData;
  }
}
