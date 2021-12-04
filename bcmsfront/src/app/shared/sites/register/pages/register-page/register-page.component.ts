import { Component, OnInit } from '@angular/core';
import { RegisterFacadeService } from './register-facade.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
  constructor(private registerFacade: RegisterFacadeService) {}

  ngOnInit(): void {}

  public onEmailClicked(email: string): void {
    this.registerFacade.sendMail(email);
  }
}
