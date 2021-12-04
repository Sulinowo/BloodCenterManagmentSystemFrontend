import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  @Output() onEmailClicked = new EventEmitter<string>();

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

  ngOnInit(): void {
    // this.route.queryParams.subscribe((queryParams: VerifyEmail) => {
    //   const parsedParams = this.patientFacade.parseQueryParams(queryParams);
    //   this.filters = { ...parsedParams };
    //   this.patientFacade.loadVisits(this.pageOptions, this.filters);
    // });
  }

  public onEmailClick(): void {
    this.onEmailClicked.emit(this.sendMailForm.value.email);
  }
}
