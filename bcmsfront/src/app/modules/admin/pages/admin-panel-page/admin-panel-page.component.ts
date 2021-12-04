import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-panel-page',
  templateUrl: './admin-panel-page.component.html',
  styleUrls: ['./admin-panel-page.component.scss'],
})
export class AdminPanelPageComponent {
  constructor(private router: Router) {}

  public onAddAdmin() {
    this.router.navigate(['/admin/add/admin']);
  }

  public onAddWorker() {
    this.router.navigate(['/admin/add/worker']);
  }

  public onShowWorkers() {
    this.router.navigate(['/admin/workers']);
  }

  public onShowProfile() {
    this.router.navigate(['/admin/profile']);
  }
}
