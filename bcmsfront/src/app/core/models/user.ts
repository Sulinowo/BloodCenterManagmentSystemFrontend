import { Role } from './roles';

export interface UserDeatils {
  unique_name: string;
  UserId: number;
  Role: Role;
  nbf: number;
  exp: number;
  iat: number;
}

export interface User {
  access_token: string;
  data?: UserDeatils;
}
