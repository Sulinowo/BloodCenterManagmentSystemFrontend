import { Injectable } from '@angular/core';
import { EditExamination } from 'src/app/core/models/examination';
import { WorkerClientService } from '../../../clients/worker-client.service';
import { ExaminationsService } from '../../../services/examinations.service';

@Injectable({
  providedIn: 'root'
})
export class ExaminationEditFacadeService {
  public editExamination$ = this.examinationService.editExamination$;
  public examinationDetails$ = this.examinationService.examinationDetails$;

  constructor(
    private examinationService: ExaminationsService,
    private workerClient: WorkerClientService
  ) { }

  public editExamination(data: EditExamination): void {
    this.workerClient.editExamination(data).subscribe((data) => {
      this.examinationService.editExamination(data);
    });
  }
  
  public loadExaminationData(donationId: number): void {
    this.workerClient.getDonationDetails(donationId).subscribe((data) => {
      this.examinationService.editExaminationInitialize(data);
    });
  }
}
