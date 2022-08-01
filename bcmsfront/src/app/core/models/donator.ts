export interface Donator {
  pesel: string;
  homeAdress: string;
  phoneNumber: string;
  ammountOfBloodDonated: number;
  bloodType: BloodTypeName;
  user: DonatorDetails;
}

export interface DonatorDetails {
  id: number;
  email: string;
  firstName: string;
  surname: string;
}

export interface BloodTypeName {
  bloodTypeName: string;
}

export interface DonatorDonationGet {
  pesel: string;
  user: DonatorDetails;
}
