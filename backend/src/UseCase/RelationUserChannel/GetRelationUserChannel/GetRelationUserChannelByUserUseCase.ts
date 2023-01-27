import { IRelationUserChannelRepository } from "../../../repositories/IRelationUserChannel";
import { GetRelationUserChannelDTO } from "./GetRelationUserChannelDTO";

export class GetRelationUserChannelByUserUseCase {
  constructor(
    private relationUserChannelRepository: IRelationUserChannelRepository
  ) {}

  async execute(data: GetRelationUserChannelDTO) {
    const relationUserChannelRepository =
      await this.relationUserChannelRepository.getRelationById(data.userId);
    return relationUserChannelRepository;
  }
}
