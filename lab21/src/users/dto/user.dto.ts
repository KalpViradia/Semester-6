export class CreateUserDto {
  username: string;
  email: string;
  password: string;
  role: string;
}

export class UpdateUserDto {
  username?: string;
  email?: string;
  password?: string;
  role?: string;
}
