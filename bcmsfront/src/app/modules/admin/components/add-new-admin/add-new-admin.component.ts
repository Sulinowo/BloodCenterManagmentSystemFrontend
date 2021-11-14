import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewWorker } from 'src/app/core/models/add-worker';

@Component({
  selector: 'app-add-new-admin',
  templateUrl: './add-new-admin.component.html',
  styleUrls: ['./add-new-admin.component.scss']
})
export class AddNewAdminComponent {
  @Output() addAdmin = new EventEmitter<NewWorker>();

  public addAdminForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.addAdminForm = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
      firstName: [null, Validators.required],
      surname: [null, Validators.required],
    });
  }

  public onAddAdmin(): void {
    this.addAdmin.emit(this.addAdminForm.value);
    console.log(this.addAdminForm.value);
  }
}
