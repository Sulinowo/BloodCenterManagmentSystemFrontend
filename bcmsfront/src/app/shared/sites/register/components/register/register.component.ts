import {
  ChangeDetectionStrategy,
  Component,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  @Output() onEmailClicked = new EventEmitter<string>();

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  public sendMailForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.sendMailForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
    });
  }

  public onEmailClick(): void {
    this.onEmailClicked.emit(this.sendMailForm.value.email);
  }

  public getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Musisz wprowadzić adres email';
    }

    return this.email.hasError('email') ? 'Nie poprawny adres email' : '';
  }
}
