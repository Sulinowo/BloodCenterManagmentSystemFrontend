import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VerifyEmail } from 'src/app/core/models/verify-email';
import { RegisterFacadeService } from './register-facade.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {
  public sendMailForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public registerFacade: RegisterFacadeService,
    private formBuilder: FormBuilder) {
      this.sendMailForm = this.formBuilder.group({
        email: [
          null, 
          [Validators.required, Validators.email]
      ]});
    }

  ngOnInit(): void {
    // this.route.queryParams.subscribe((queryParams: VerifyEmail) => {
    //   const parsedParams = this.patientFacade.parseQueryParams(queryParams);
    //   this.filters = { ...parsedParams };
    //   this.patientFacade.loadVisits(this.pageOptions, this.filters);
    // });
  }

  public onEmailClicked(): void {
    console.log(this.sendMailForm.value);
    this.registerFacade.sendMail(this.sendMailForm.value);
  }
}
