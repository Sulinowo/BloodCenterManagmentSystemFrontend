import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EndDonation } from 'src/app/core/models/end-donation';
import { BloodStorageEndDonationFacadeService } from './blood-storage-end-donation-facade.service';

@Component({
  selector: 'app-blood-storage-end-donation-page',
  templateUrl: './blood-storage-end-donation-page.component.html',
  styleUrls: ['./blood-storage-end-donation-page.component.scss'],
})
export class BloodStorageEndDonationPageComponent implements OnInit {
  constructor(
    private bloodStorageEndFacade: BloodStorageEndDonationFacadeService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public onAddBloodUnitClick(data: EndDonation): void {
    this.bloodStorageEndFacade.addBloodUnit(data);
    this.router.navigate(['/worker/bloodstorage']);
  }
}
