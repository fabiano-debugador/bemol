import { IUpadeteRelationUserChannelRepository } from "../../../repositories/IRelationUserChannel";
import { IUpdateRelationUserChannelDTO } from "./UpdateRelationUserChannelDTO";

export class UpdateRelationUserChannelUseCase {
  constructor(
    private relationUserChannelRepository: IUpadeteRelationUserChannelRepository
  ) {}

  async execute(data: IUpdateRelationUserChannelDTO) {
    await this.relationUserChannelRepository.update(data);
  }
}
