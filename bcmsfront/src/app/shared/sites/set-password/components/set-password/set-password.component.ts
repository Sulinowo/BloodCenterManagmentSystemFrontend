import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SetPasswordComponent {
  public setPasswordForm: FormGroup;

  

  constructor(private formBuilder: FormBuilder){
    this.setPasswordForm = this.formBuilder.group({
      password: ['', [Validators.required]],
      confirmPassword: [''],
    });
  }
  

  public onSetPasswordClicked(): void {

  }
}
