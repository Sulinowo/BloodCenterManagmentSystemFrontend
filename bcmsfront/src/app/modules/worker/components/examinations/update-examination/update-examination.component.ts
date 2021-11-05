import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ExaminationPatch } from 'src/app/core/models/examination';

@Component({
  selector: 'app-update-examination',
  templateUrl: './update-examination.component.html',
  styleUrls: ['./update-examination.component.scss'],
})
export class UpdateExaminationComponent implements OnInit {
  @Output() onAddDoctorExaminationClick = new EventEmitter<ExaminationPatch>();

  public addDoctorExaminationForm: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) {
    const donationId = this.route.snapshot.paramMap.get('donationId') || '';

    this.addDoctorExaminationForm = this.formBuilder.group({
      donationId: [parseInt(donationId)],
      bloodPressureUpper: [null, Validators.required],
      bloodPressureLower: [null, Validators.required],
      height: [null, Validators.required],
      weight: [null, Validators.required],
    });
  }

  ngOnInit(): void {}

  public onAddDoctorExamination(): void {
    this.onAddDoctorExaminationClick.emit(this.addDoctorExaminationForm.value);
  }
}
