import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  @Output() onRegister = new EventEmitter<void>();
  @Output() onRememberPassword = new EventEmitter<void>();

  hide = true;

  public loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private auth: AuthService) {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
  }

  public onLoginClicked(): void {
    this.auth
      .login(this.loginForm.value['email'], this.loginForm.value['password'])
      .subscribe();
  }

  public onRegisterClick(): void {
    this.onRegister.emit();
  }

  public onRememberPasswordClick(): void {
    this.onRememberPassword.emit();
  }

  password = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);

  public getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Musisz wprowadzić adres email';
    }

    return this.email.hasError('email') ? 'Nie poprawny adres email' : '';
  }

  public getPasswordErrorMessage() {
    if (this.password.hasError('required')) {
      return 'Musisz wprowadzić hasło';
    }
    return this.password.hasError('password') ? 'Nie poprawne hasło' : '';
  }
}
