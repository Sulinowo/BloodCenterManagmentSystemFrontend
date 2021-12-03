import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent {
  @Output() addAdmin = new EventEmitter<void>();
  @Output() addWorker = new EventEmitter<void>();
  @Output() showWorkers = new EventEmitter<void>();
  @Output() showProfile = new EventEmitter<void>();

  public onAddAdminClick(): void {
    this.addAdmin.emit();
  }

  public onAddWorkerClick(): void {
    this.addWorker.emit();
  }

  public onShowWorkersClick(): void {
    this.showWorkers.emit();
  }

  public onShowProfileClick(): void {
    this.showProfile.emit();
  }
}
