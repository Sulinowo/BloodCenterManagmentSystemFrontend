import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DonationsQueueBloodExaminedFacadeService } from './donations-queue-blood-examined-facade.service';

@Component({
  selector: 'app-donations-queue-blood-examined',
  templateUrl: './donations-queue-blood-examined.component.html',
  styleUrls: ['./donations-queue-blood-examined.component.scss']
})
export class DonationsQueueBloodExaminedComponent implements OnInit {
  public bloodExaminedQueue$ = this.donationFacade.bloodExaminedQueue$;
   
  constructor(
    private donationFacade : DonationsQueueBloodExaminedFacadeService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.donationFacade.getBloodExaminedQueue();
  }

}
