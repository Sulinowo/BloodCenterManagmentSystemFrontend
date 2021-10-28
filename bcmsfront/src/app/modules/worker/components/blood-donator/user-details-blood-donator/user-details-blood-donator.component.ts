import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Donator } from 'src/app/core/models/donator';
import { UserData } from 'src/app/core/models/user-data';

@Component({
  selector: 'app-user-details-blood-donator',
  templateUrl: './user-details-blood-donator.component.html',
  styleUrls: ['./user-details-blood-donator.component.scss'],
})
export class UserDetailsBloodDonatorComponent implements OnChanges {
  @Input() showEditable = false;
  @Input() state?: Donator | null;
  @Output() profileEdit = new EventEmitter<UserData>();
  @Output() showDonationList = new EventEmitter<number>();

  public userDataForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute) {
    this.userDataForm = this.formBuilder.group({
      pesel: [null],
      homeAdress: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required]],
      ammountOfBloodDonated: [null],
      bloodTypeName: [null],
      email: [null, [Validators.required]],
      firstName: [null],
      surname: [null],
    });
    this.onEditClicked();
  }

  public ngOnChanges(): void {
    this.userDataForm.patchValue({
      ...this.state,
      ...(this.state?.user || {}),
    });
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

  public onShowDonationListClick() { 
    this.showDonationList.emit(); 
  }
}
