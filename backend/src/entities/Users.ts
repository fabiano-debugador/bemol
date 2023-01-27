export class User {
  public id?: string;
  public login!: string;
  public password!: string;
  public name!: string;
  public cpf!: string;
  public zipCode!: string;
  public address!: string;
  public complement!: string;
  public city!: string;
  public uf!: string;

  constructor(props: Omit<User, "id">) {
    Object.assign(this, props);
  }
}
