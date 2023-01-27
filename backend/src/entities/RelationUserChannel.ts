export class RelationUserChannel {
  public id?: string;
  public userId!: string;
  public listOfchannels!: any;

  constructor(props: Omit<RelationUserChannel, "id">) {
    Object.assign(this, props);
  }
}
