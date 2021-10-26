import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserData } from 'src/app/core/models/user-data';

@Component({
  selector: 'app-user-details-blood-donator',
  templateUrl: './user-details-blood-donator.component.html',
  styleUrls: ['./user-details-blood-donator.component.scss']
})
export class UserDetailsBloodDonatorComponent implements OnInit {
  @Input() showEditable = false;
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

  ngOnInit(): void {
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
