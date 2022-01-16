import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BloodExaminedDonationFacadeService } from './blood-examined-donation-facade.service';

@Component({
  selector: 'app-blood-examined-donation-page',
  templateUrl: './blood-examined-donation-page.component.html',
  styleUrls: ['./blood-examined-donation-page.component.scss'],
})
export class BloodExaminedDonationPageComponent implements OnInit {
  public donation$ = this.bloodExaminedDonationFacade.donation$;
  public isExaminationNullable$ =
    this.bloodExaminedDonationFacade.isExaminationNullable$;

  constructor(
    private bloodExaminedDonationFacade: BloodExaminedDonationFacadeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const donationId = this.route.snapshot.paramMap.get('donationId') || '';
    this.bloodExaminedDonationFacade.loadDonation(parseInt(donationId) || -1);
  }

  public onDetailsClick(): void {
    const donationId = this.route.snapshot.paramMap.get('donationId') || '';
    this.router.navigate([`worker/donations/${donationId}/details`]);
  }

  public onDoctorExamiationAddClick(): void {
    const donationId = this.route.snapshot.paramMap.get('donationId') || '';
    this.router.navigate([
      `worker/queue/bloodexamined/${donationId}/adddoctorexamination`,
    ]);
  }

  public onDoctorExamiationEditClick(): void {
    const donationId = this.route.snapshot.paramMap.get('donationId') || '';
    this.router.navigate([
      `worker/queue/bloodexamined/${donationId}/editdoctorexamination`,
    ]);
  }

  public onStatusChangeClick(): void {
    const donationId = this.route.snapshot.paramMap.get('donationId') || '';
    this.router.navigate([`worker/donation/${donationId}/changestatus`]);
  }
}
