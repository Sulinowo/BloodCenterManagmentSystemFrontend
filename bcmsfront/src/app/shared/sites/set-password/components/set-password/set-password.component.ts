import {
  ChangeDetectionStrategy,
  Component,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SetPasswordComponent {
  @Output() onSetPasswordClicked = new EventEmitter<string>();

  public setPasswordForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.setPasswordForm = this.formBuilder.group({
      password: ['', [Validators.required]],
      confirmPassword: [''],
    });
  }

  public onSetPasswordClick(): void {
    this.onSetPasswordClicked.emit(this.setPasswordForm.value.password);
  }
}
