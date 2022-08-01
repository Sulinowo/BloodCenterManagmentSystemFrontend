import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EditExamination } from 'src/app/core/models/examination';
import { ExaminationEditFacadeService } from './examination-edit-facade.service';

@Component({
  selector: 'app-examination-edit-page',
  templateUrl: './examination-edit-page.component.html',
  styleUrls: ['./examination-edit-page.component.scss'],
})
export class ExaminationEditPageComponent implements OnInit {
  public examinationDetails$ = this.examinationFacade.examinationDetails$;

  constructor(
    private examinationFacade: ExaminationEditFacadeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const donationId = this.route.snapshot.paramMap.get('donationId') || '';
    this.examinationFacade.loadExaminationData(parseInt(donationId) || -1);
  }

  public onEditExaminationClick(data: EditExamination): void {
    this.examinationFacade.editExamination(data);
  }
}
