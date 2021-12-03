import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-worker-panel-page',
  templateUrl: './worker-panel-page.component.html',
  styleUrls: ['./worker-panel-page.component.scss']
})
export class WorkerPanelPageComponent {
  constructor(private router: Router) { }

  public onShowOrAddBloodDonators() {
    this.router.navigate(['/worker/blooddonators']);
  }

  public onShowMagazin() {
    this.router.navigate(['/worker/bloodstorage']);
  }

  public onAddForeignBlood() {
    this.router.navigate(['/worker/bloodstorage/addforeignbloodunit']);
  }

  public onShowProfile() {
    this.router.navigate(['/worker/profile']);
  }
  
  public onShowDonations() {
    this.router.navigate(['/worker/donations']);
  }
  
  public onShowRegisteredQueue() {
    this.router.navigate(['/worker/queue/registered']);
  }
  
  public onShowBloodExaminedQueue() {
    this.router.navigate(['/worker/queue/bloodexamined']);
  }

  public onShowBloodQualifiedQueue() {
    this.router.navigate(['/worker/queue/qualified']);
  }

}
