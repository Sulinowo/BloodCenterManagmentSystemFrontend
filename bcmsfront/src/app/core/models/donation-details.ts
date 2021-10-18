import { ResultOfExamination } from "./result-of-examination";

export interface DonationDetails{
    id: number;
    stage: string;
    donationDate: Date;
    rejectionReason: string;
    resultOfExamination: ResultOfExamination;
}