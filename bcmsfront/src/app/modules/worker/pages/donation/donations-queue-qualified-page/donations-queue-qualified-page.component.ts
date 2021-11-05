import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DonationsQueueQualifiedFacadeService } from './donations-queue-qualified-facade.service';

@Component({
  selector: 'app-donations-queue-qualified-page',
  templateUrl: './donations-queue-qualified-page.component.html',
  styleUrls: ['./donations-queue-qualified-page.component.scss']
})
export class DonationsQueueQualifiedPageComponent implements OnInit {
  public qualifiedQueue$ = this.donationFacade.qualifiedQueue$;
   
  constructor(
    private donationFacade : DonationsQueueQualifiedFacadeService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.donationFacade.getQualifiedQueue();
  }

}
