import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BloodStorageForeign } from 'src/app/core/models/bloodstorage';

interface Covid {
  value: boolean;
  viewValue: string;
}

@Component({
  selector: 'app-blood-unit-foreign',
  templateUrl: './blood-unit-foreign.component.html',
  styleUrls: ['./blood-unit-foreign.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BloodUnitForeignComponent {
  @Output() onAddBloodUnitClick = new EventEmitter<BloodStorageForeign>();

  public addForeignBloodUnitForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.addForeignBloodUnitForm = this.formBuilder.group({
      bloodTypeName: [null, Validators.required],
      foreignBloodUnitId: [null, Validators.required],
      bloodUnitLocation: [null, Validators.required],
      isAfterCovid: [null, Validators.required],
    });
  }

  public onAddBloodUnit(): void {
    this.onAddBloodUnitClick.emit(this.addForeignBloodUnitForm.value);
    console.log(this.addForeignBloodUnitForm.value);
  }

  afterCovid: Covid[] = [
    { value:true, viewValue:"Tak" },
    { value:false, viewValue:"Nie" },
  ]
}
