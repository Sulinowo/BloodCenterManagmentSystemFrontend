import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DonationDetails } from 'src/app/core/models/donation-details';
import {
  EditExamination,
  Examination,
  ExaminationPatch,
} from 'src/app/core/models/examination';

@Injectable({
  providedIn: 'root',
})
export class ExaminationsService {
  public examination$ = new BehaviorSubject<Examination>({} as Examination);
  public examinationPatch$ = new BehaviorSubject<ExaminationPatch>(
    {} as ExaminationPatch
  );
  public editExamination$ = new BehaviorSubject<EditExamination>(
    {} as EditExamination
  );
  public examinationDetails$ = new BehaviorSubject(<DonationDetails>{});

  public addExamination(data: Examination): void {
    this.examination$.next(data);
  }

  public addExaminationPatch(data: ExaminationPatch): void {
    this.examinationPatch$.next(data);
  }

  public editExamination(data: EditExamination): void {
    this.editExamination$.next(data);
  }

  public editExaminationInitialize(examination: DonationDetails): void {
    this.examinationDetails$.next(examination);
  }
}
