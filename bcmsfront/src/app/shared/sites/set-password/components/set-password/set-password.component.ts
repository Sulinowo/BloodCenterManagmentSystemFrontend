import {
  Component,
  Output,
  EventEmitter,
  ChangeDetectorRef,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.scss'],
})
export class SetPasswordComponent {
  @Output() onSetPasswordClicked = new EventEmitter<string>();

  public setPasswordForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private changeDetector: ChangeDetectorRef
  ) {
    this.setPasswordForm = this.formBuilder.group(
      {
        password: ['', [Validators.required]],
        confirmPassword: [''],
      },
      {
        validators: [this.checkPasswords],
      }
    );
  }

  public onSetPasswordClick(): void {
    this.onSetPasswordClicked.emit(this.setPasswordForm.value.password);
  }

  public checkPasswords: ValidatorFn = (
    group: AbstractControl
  ): ValidationErrors | null => {
    let pass = group.get('password')!.value;
    let confirmPass = group.get('confirmPassword')!.value;
    this.changeDetector.markForCheck();
    return pass === confirmPass ? null : { notSame: true };
  };
}
