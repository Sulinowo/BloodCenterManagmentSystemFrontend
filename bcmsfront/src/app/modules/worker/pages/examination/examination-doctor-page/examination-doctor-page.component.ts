import { Component, OnInit } from '@angular/core';
import { ExaminationPatch } from 'src/app/core/models/examination';
import { ExaminationDoctorFacadeService } from './examination-doctor-facade.service';

@Component({
  selector: 'app-examination-doctor-page',
  templateUrl: './examination-doctor-page.component.html',
  styleUrls: ['./examination-doctor-page.component.scss']
})
export class ExaminationDoctorPageComponent implements OnInit {

  constructor(private doctorExaminationFacade: ExaminationDoctorFacadeService) {}

  ngOnInit(): void {}

  public onAddDoctorExaminationClick(data: ExaminationPatch): void {
    this.doctorExaminationFacade.onDoctorExaminationAdd(data);
  }

}
