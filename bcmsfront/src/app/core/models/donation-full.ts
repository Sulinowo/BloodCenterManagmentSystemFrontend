import { Donator, DonatorDonationGet } from './donator';

export interface DonationFull {
  id: number;
  donationDate: Date;
  stage: string;
  rejectionReason: string;
  bloodDonator: Donator;
}

export interface DonationGet {
  id: number;
  stage: string;
  donationDate: Date;
  bloodDonator: DonatorDonationGet;
}
