import { Component, OnInit } from '@angular/core';
import { RegisterFacadeService } from '../../components/register/register-facade.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  constructor(public registerFacade: RegisterFacadeService) { }

  ngOnInit(): void {
  }
  
}
