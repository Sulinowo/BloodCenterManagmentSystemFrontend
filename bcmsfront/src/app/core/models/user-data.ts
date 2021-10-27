export interface UserData
  extends Partial<{
    id: number;
    email: string;
    password: string;
    homeAdress: string;
    phoneNumber: string;
  }> {}
