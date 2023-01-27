export class Channel {
  public id?: string;
  public name!: string;
  public type!: string;

  constructor(props: Omit<Channel, "id">) {
    Object.assign(this, props);
  }
}
