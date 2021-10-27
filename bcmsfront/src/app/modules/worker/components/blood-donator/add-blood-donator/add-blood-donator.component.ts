import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Donator } from 'src/app/core/models/donator';

@Component({
  selector: 'app-add-blood-donator',
  templateUrl: './add-blood-donator.component.html',
  styleUrls: ['./add-blood-donator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddBloodDonatorComponent {
  @Output() onAddDonator = new EventEmitter<Donator>();

  public addBloodDonatorForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.addBloodDonatorForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      surname: [null, Validators.required],
      pesel: [null, Validators.required],
      email: [null, Validators.required],
      phoneNumber: [null, Validators.required],
      homeAdress: [null, Validators.required],
      bloodTypeName: [null, Validators.required],
    });
  }

  public onAddBloodDonator(): void {
    this.onAddDonator.emit(this.addBloodDonatorForm.value);
    console.log(this.addBloodDonatorForm.value);
  }
}
