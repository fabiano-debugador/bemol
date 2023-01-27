import { IRelationUserChannelRepository } from "../../../repositories/IRelationUserChannel";

export class ListRelationUserChannelUseCase {
  constructor(
    private relationUserChannelRepository: IRelationUserChannelRepository
  ) {}

  async execute() {
    const relationUserChannelRepository =
      await this.relationUserChannelRepository.getRelation();
    return relationUserChannelRepository;
  }
}
