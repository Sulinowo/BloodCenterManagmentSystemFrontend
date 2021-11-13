export interface Examination {
  donationId: number;
  hb: number;
  ht: number;
  rbc: number;
  wbc: number;
  plt: number;
  mch: number;
  mchc: number;
  mcv: number;
  ne: number;
  eo: number;
  ba: number;
  ly: number;
  mo: number;
}

export interface EditExamination {
  donationId: number;
  hb: number;
  ht: number;
  rbc: number;
  wbc: number;
  plt: number;
  mch: number;
  mchc: number;
  mcv: number;
  ne: number;
  eo: number;
  ba: number;
  ly: number;
  mo: number;
}

export interface ExaminationPatch {
  donationId: number;
  bloodPressureUpper: number;
  bloodPressureLower: number;
  height: number;
  weight: number;
}
