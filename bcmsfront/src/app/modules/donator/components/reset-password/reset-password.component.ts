import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResetPasswordComponent {
  @Output() onEmailClicked = new EventEmitter<string>();

  public sendMailForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.sendMailForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
    });
  }

  public onEmailClick(): void {
    this.onEmailClicked.emit(this.sendMailForm.value.email);
  }
}
