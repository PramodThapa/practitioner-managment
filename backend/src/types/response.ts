import { Token } from './token';
import { Users } from 'src/users/schemas/users.schema';

export interface Response<T> {
  data: T | T[];
  status?: number;
}

export type UserToGet = Pick<Users, 'id' | 'username'>;

export interface UserResponse {
  token: Token;
  user: UserToGet;
}
