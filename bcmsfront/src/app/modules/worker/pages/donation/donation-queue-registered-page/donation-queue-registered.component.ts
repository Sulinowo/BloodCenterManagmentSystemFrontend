import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DonationGet } from 'src/app/core/models/donation-full';
import { DonationQueueRegisteredFacadeService } from './donation-queue-registered-facade.service';

@Component({
  selector: 'app-donation-queue-registered',
  templateUrl: './donation-queue-registered.component.html',
  styleUrls: ['./donation-queue-registered.component.scss']
})
export class DonationQueueRegisteredComponent implements OnInit {
  public registeredQueue$ = this.donationFacade.registeredQueue$;
   
  constructor(
    private donationFacade : DonationQueueRegisteredFacadeService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.donationFacade.getRegisteredQueue();
  }

  public onDonationQueueClick(data: DonationGet): void {
    this.router.navigate([`worker/queue/registered/${data.id}`]);
  }

}
