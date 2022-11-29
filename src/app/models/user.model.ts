export interface UserModel {

  readonly id: number;
  readonly email: string;
  readonly username: string;
  readonly password: string;
  readonly name: Array<Name>;
}

interface Name {
  readonly firstname: string;
  readonly lastname: string;
}


