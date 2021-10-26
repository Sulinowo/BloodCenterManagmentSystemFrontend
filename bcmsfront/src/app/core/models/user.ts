import { Role } from './roles';

export interface UserDeatils {
  unique_name: string;
  userId: number,
  Role: Role;
  nbf: number;
  exp: number;
  iat: number;
}

export interface User {
  access_token: string;
  data?: UserDeatils;
}
