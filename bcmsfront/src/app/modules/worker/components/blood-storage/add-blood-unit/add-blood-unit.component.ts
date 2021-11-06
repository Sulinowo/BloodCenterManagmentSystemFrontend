import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EndDonation } from 'src/app/core/models/end-donation';

interface Covid {
  value: boolean;
  viewValue: string;
}

@Component({
  selector: 'app-add-blood-unit',
  templateUrl: './add-blood-unit.component.html',
  styleUrls: ['./add-blood-unit.component.scss'],
})
export class AddBloodUnitComponent {
  @Output() onAddBloodUnitClick = new EventEmitter<EndDonation>();

  public addBloodUnitForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private route: ActivatedRoute
  ) {
    const donationId = this.route.snapshot.paramMap.get('donationId') || '';

    this.addBloodUnitForm = this.formBuilder.group({
      donationId: [parseInt(donationId)],
      isAfterCovid: [null, Validators.required],
    });
  }

  public onAddBloodUnit(): void {
    this.onAddBloodUnitClick.emit(this.addBloodUnitForm.value);
    console.log(this.addBloodUnitForm.value);
  }

  afterCovid: Covid[] = [
    { value:true, viewValue:"Tak" },
    { value:false, viewValue:"Nie" },
  ]
}
