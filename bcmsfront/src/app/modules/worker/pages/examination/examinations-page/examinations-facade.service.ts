import { Injectable } from '@angular/core';
import { Examination, ExaminationPatch } from 'src/app/core/models/examination';
import { WorkerClientService } from '../../../clients/worker-client.service';
import { ExaminationsService } from '../../../services/examinations.service';

@Injectable({
  providedIn: 'root',
})
export class ExaminationsFacadeService {
  public examination$ = this.examinationService.examination$;
  public examinationPatch$ = this.examinationService.examinationPatch$;

  constructor(
    private examinationService: ExaminationsService,
    private workerClient: WorkerClientService
  ) {}

  public addExamination(data: Examination): void {
    this.workerClient.addExamination(data).subscribe((data) => {
      this.examinationService.addExamination(data);
    });
  }

  public addExaminationPatch(data: ExaminationPatch): void {
    this.workerClient.addExaminationPatch(data).subscribe((data) => {
      this.examinationService.addExaminationPatch(data);
    });
  }
}
