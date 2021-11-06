import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BloodExaminedDonationFacadeService } from './blood-examined-donation-facade.service';

@Component({
  selector: 'app-blood-examined-donation-page',
  templateUrl: './blood-examined-donation-page.component.html',
  styleUrls: ['./blood-examined-donation-page.component.scss']
})
export class BloodExaminedDonationPageComponent implements OnInit {
  public donation$ = this.bloodExaminedDonationFacade.donation$;

  constructor(
    private bloodExaminedDonationFacade : BloodExaminedDonationFacadeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const donationId = this.route.snapshot.paramMap.get('donationId') || '';
    this.bloodExaminedDonationFacade.loadDonation(parseInt(donationId) || -1);
  }

  public onDetailsClick(): void {
    const donationId = this.route.snapshot.paramMap.get('donationId') || '';
    this.router.navigate([`/donations/${donationId}/details`]);
  }

  public onDoctorExamiationAddClick(): void {
    const donationId = this.route.snapshot.paramMap.get('donationId') || '';
    this.router.navigate([`/queue/bloodexamined/${donationId}/adddoctorexamination`]);
  }

  public onStatusChangeClick(): void {
    const donationId = this.route.snapshot.paramMap.get('donationId') || '';
    this.router.navigate([`donation/${donationId}/changestatus`]);
  }

}
