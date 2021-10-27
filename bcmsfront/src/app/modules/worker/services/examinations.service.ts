import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Examination, ExaminationPatch } from 'src/app/core/models/examination';

@Injectable({
  providedIn: 'root',
})
export class ExaminationsService {
  public examination$ = new BehaviorSubject<Examination>({} as Examination);
  public examinationPatch$ = new BehaviorSubject<ExaminationPatch>(
    {} as ExaminationPatch
  );

  public addExamination(data: Examination): void {
    this.examination$.next(data);
  }

  public addExaminationPatch(data: ExaminationPatch): void {
    this.examinationPatch$.next(data);
  }
}
