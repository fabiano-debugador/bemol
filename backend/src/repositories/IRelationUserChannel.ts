import { RelationUserChannel } from "../entities/RelationUserChannel";

export interface IRelationUserChannelRepository {
  getRelation(): Promise<RelationUserChannel[]>;
  getRelationById(userId: string): Promise<RelationUserChannel | null>;
}

export interface ICreateRepository extends IRelationUserChannelRepository {
  create(data: RelationUserChannel): Promise<void>;
}

export interface IUpadeteRelationUserChannelRepository
  extends IRelationUserChannelRepository {
  update(data: RelationUserChannel): Promise<RelationUserChannel>;
}
