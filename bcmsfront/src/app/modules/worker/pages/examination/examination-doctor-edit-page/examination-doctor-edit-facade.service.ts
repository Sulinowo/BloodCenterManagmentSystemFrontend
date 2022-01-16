import { Injectable } from '@angular/core';
import { ExaminationPatch } from 'src/app/core/models/examination';
import { WorkerClientService } from '../../../clients/worker-client.service';
import { ExaminationsService } from '../../../services/examinations.service';

@Injectable({
  providedIn: 'root',
})
export class ExaminationDoctorEditFacadeService {
  public examinationPatch$ = this.examinationService.examinationPatch$;

  constructor(
    private examinationService: ExaminationsService,
    private workerClient: WorkerClientService
  ) {}

  public onDoctorExaminationEdit(data: ExaminationPatch): void {
    this.workerClient.addExaminationPatch(data).subscribe((data) => {
      this.examinationService.addExaminationPatch(data);
    });
  }
}
