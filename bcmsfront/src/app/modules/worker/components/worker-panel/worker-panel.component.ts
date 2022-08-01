import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-worker-panel',
  templateUrl: './worker-panel.component.html',
  styleUrls: ['./worker-panel.component.scss'],
})
export class WorkerPanelComponent {
  @Output() showOrAddBloodDonators = new EventEmitter<void>();
  @Output() showMagazin = new EventEmitter<void>();
  @Output() addForeignBlood = new EventEmitter<void>();
  @Output() showProfile = new EventEmitter<void>();
  @Output() showDonations = new EventEmitter<void>();
  @Output() showRegisteredQueue = new EventEmitter<void>();
  @Output() showBloodExaminedQueue = new EventEmitter<void>();
  @Output() showBloodQualifiedQueue = new EventEmitter<void>();

  public onShowOrAddBloodDonatorsClick(): void {
    this.showOrAddBloodDonators.emit();
  }

  public onShowMagazinClick(): void {
    this.showMagazin.emit();
  }

  public onAddForeignBloodClick(): void {
    this.addForeignBlood.emit();
  }

  public onShowProfileClick(): void {
    this.showProfile.emit();
  }

  public onShowDonationsClick(): void {
    this.showDonations.emit();
  }

  public onShowRegisteredQueueClick(): void {
    this.showRegisteredQueue.emit();
  }

  public onShowBloodExaminedQueueClick(): void {
    this.showBloodExaminedQueue.emit();
  }

  public onShowBloodQualifiedQueueClick(): void {
    this.showBloodQualifiedQueue.emit();
  }
}
