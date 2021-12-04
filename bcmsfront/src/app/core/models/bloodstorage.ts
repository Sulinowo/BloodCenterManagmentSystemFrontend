export interface BloodStorage {
  id: number;
  foreignBloodUnitId?: number;
  bloodUnitLocation?: string;
  isAvailable?: boolean;
  isAfterCovid?: boolean;
  bloodTypeId?: number;
  donationId?: number;
}

export interface BloodStorageForeign {
  bloodTypeName: string;
  foreignBloodUnitId: number;
  bloodUnitLocation: string;
  isAfterCovid: boolean;
}
