import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Donator } from 'src/app/core/models/donator';
import { UserData } from 'src/app/core/models/user-data';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDataComponent implements OnChanges {
  @Input() showEditable = false;
  @Input() state?: Donator | null;
  @Output() profileEdit = new EventEmitter<UserData>();

  public userDataForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.userDataForm = this.formBuilder.group({
      pesel:[null],
      homeAdress:[null,[Validators.required]],
      phoneNumber:[null,[Validators.required]],
      ammountOfBloodDonated:[null],
      bloodTypeName:[null],
      email:[null,[Validators.required]],
      firstName:[null],
      surname:[null],
    });
    this.onEditClicked();
  }

  public ngOnChanges(): void {
    this.userDataForm.patchValue({
      ...this.state,
      ...(this.state?.user || {})
    })
  }

  public onEditClicked(): void {
    this.showEditable = !this.showEditable;
    this.showEditable === false
      ? this.userDataForm.enable()
      : this.userDataForm.disable();
    this.userDataForm.get('pesel')?.disable();
    this.userDataForm.get('ammountOfBloodDonated')?.disable();
    this.userDataForm.get('bloodTypeName')?.disable();
    this.userDataForm.get('firstName')?.disable();
    this.userDataForm.get('surname')?.disable();
  }

  public onEditProfile(): void {
    this.profileEdit.emit(this.userDataForm.value);
    this.onEditClicked();
  }
}
