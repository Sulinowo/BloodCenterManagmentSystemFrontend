import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private auth: AuthService) {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required]],
      password: [null, Validators.required],
    });
  }

  public ngOnInit(): void {
    if (this.auth.loggedIn()) console.log(`role: ${this.auth.getRole()}`);
  }

  public onLoginClicked(): void {
    console.log(this.loginForm.value);
    this.auth
      .login(this.loginForm.value['email'], this.loginForm.value['password'])
      .subscribe();
  }
}
