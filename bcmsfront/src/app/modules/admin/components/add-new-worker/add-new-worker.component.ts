import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewWorker } from 'src/app/core/models/add-worker';

@Component({
  selector: 'app-add-new-worker',
  templateUrl: './add-new-worker.component.html',
  styleUrls: ['./add-new-worker.component.scss']
})
export class AddNewWorkerComponent {
  @Output() addWorker = new EventEmitter<NewWorker>();

  public addWorkerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.addWorkerForm = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
      firstName: [null, Validators.required],
      surname: [null, Validators.required],
    });
  }

  public onAddWorker(): void {
    this.addWorker.emit(this.addWorkerForm.value);
    console.log(this.addWorkerForm.value);
  }

}
