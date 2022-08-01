import { Component, OnInit } from '@angular/core';
import { ExaminationPatch } from 'src/app/core/models/examination';
import { ExaminationDoctorEditFacadeService } from './examination-doctor-edit-facade.service';

@Component({
  selector: 'app-examination-doctor-edit-page',
  templateUrl: './examination-doctor-edit-page.component.html',
  styleUrls: ['./examination-doctor-edit-page.component.scss'],
})
export class ExaminationDoctorEditPageComponent implements OnInit {
  constructor(
    private doctorExaminationEditFacade: ExaminationDoctorEditFacadeService
  ) {}

  ngOnInit(): void {}

  public onEditDoctorExaminationClick(data: ExaminationPatch): void {
    this.doctorExaminationEditFacade.onDoctorExaminationEdit(data);
  }
}
