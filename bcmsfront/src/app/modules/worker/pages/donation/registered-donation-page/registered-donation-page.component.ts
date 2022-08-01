import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisteredDonationFacadeService } from './registered-donation-facade.service';

@Component({
  selector: 'app-registered-donation-page',
  templateUrl: './registered-donation-page.component.html',
  styleUrls: ['./registered-donation-page.component.scss'],
})
export class RegisteredDonationPageComponent implements OnInit {
  public donation$ = this.registeredDonationFacade.donation$;
  public isExaminationNullable$ =
    this.registeredDonationFacade.isExaminationNullable$;
  public isExaminationNullable2$ =
    this.registeredDonationFacade.isExaminationNullable2$;
  constructor(
    private registeredDonationFacade: RegisteredDonationFacadeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const donationId = this.route.snapshot.paramMap.get('donationId') || '';
    this.registeredDonationFacade.loadDonation(parseInt(donationId) || -1);
  }

  public onDetailsClick(): void {
    const donationId = this.route.snapshot.paramMap.get('donationId') || '';
    this.router.navigate([`worker/donations/${donationId}/details`]);
  }

  public onExamiationAddClick(): void {
    const donationId = this.route.snapshot.paramMap.get('donationId') || '';
    this.router.navigate([
      `worker/queue/registered/${donationId}/addexamination`,
    ]);
  }

  public onStatusChangeClick(): void {
    const donationId = this.route.snapshot.paramMap.get('donationId') || '';
    this.router.navigate([`worker/donation/${donationId}/changestatus`]);
  }

  public onExaminationEditClick(): void {
    const donationId = this.route.snapshot.paramMap.get('donationId') || '';
    this.router.navigate([
      `worker/queue/registered/${donationId}/editexamination`,
    ]);
  }
}
