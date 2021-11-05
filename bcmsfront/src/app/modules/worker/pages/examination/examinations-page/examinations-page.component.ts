import { Component, OnInit } from '@angular/core';
import { Examination } from 'src/app/core/models/examination';
import { ExaminationsFacadeService } from './examinations-facade.service';

@Component({
  selector: 'app-examinations-page',
  templateUrl: './examinations-page.component.html',
  styleUrls: ['./examinations-page.component.scss'],
})
export class ExaminationsPageComponent implements OnInit {

  constructor(private examinationFacade: ExaminationsFacadeService) {}

  ngOnInit(): void {}

  public onAddExaminationClick(data: Examination): void {
    this.examinationFacade.addExamination(data);
  }
}
