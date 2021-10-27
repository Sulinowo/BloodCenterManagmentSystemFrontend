export interface BloodStorage
  extends Partial<{
    id: number;
    foreignBloodUnitId: number;
    bloodUnitLocation: string;
    isAvailable: boolean;
    isAfterCovid: boolean;
    bloodTypeId: number;
    donationId: number;
  }> {}
