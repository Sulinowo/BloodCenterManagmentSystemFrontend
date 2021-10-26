import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-blood-donator',
  templateUrl: './add-blood-donator.component.html',
  styleUrls: ['./add-blood-donator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddBloodDonatorComponent {
  public addBloodDonatorForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.addBloodDonatorForm = this.formBuilder.group({
      firstName: [null,Validators.required],
      surname: [null,Validators.required],
      pesel: [null,Validators.required],
      email: [null,Validators.required],
      phoneNumber:[null,Validators.required],
      homeAdress: [null,Validators.required],
      bloodTypeName: [null,Validators.required],
    })
  }

}
