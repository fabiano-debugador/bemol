import { RelationUserChannel } from "../../../entities/RelationUserChannel";
import { ICreateRepository } from "../../../repositories/IRelationUserChannel";
import { ICreateRelationUserChannelDTO } from "./CreateRelationUserChannelDTO";

export class CreateRelationUserChannelUseCase {
  constructor(private RelationUserChannelRepository: ICreateRepository) {}

  async execute(data: ICreateRelationUserChannelDTO) {
    const relation = new RelationUserChannel(data);
    await this.RelationUserChannelRepository.create(relation);
  }
}
