import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
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
  selector: 'app-set-new-password',
  templateUrl: './set-new-password.component.html',
  styleUrls: ['./set-new-password.component.scss'],
})
export class SetNewPasswordComponent {
  @Output() onSetPasswordClicked = new EventEmitter<string>();

  public setNewPasswordForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private changeDetector: ChangeDetectorRef
  ) {
    this.setNewPasswordForm = this.formBuilder.group(
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
    this.onSetPasswordClicked.emit(this.setNewPasswordForm.value.password);
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
