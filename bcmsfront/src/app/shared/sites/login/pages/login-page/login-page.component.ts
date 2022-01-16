import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {
  constructor(private router: Router) {}

  public onRegisterClick(): void {
    this.router.navigate(['/register']);
  }

  public onRememberPasswordClick(): void {
    this.router.navigate(['/resetpass']);
  }
}
