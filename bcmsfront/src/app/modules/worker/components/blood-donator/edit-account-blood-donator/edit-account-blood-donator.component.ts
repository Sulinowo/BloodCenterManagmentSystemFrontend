import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-edit-account-blood-donator',
  templateUrl: './edit-account-blood-donator.component.html',
  styleUrls: ['./edit-account-blood-donator.component.scss'],
})
export class EditAccountBloodDonatorComponent {
  @Output() editClicked = new EventEmitter<void>();

  public onEditClicked(): void {
    this.editClicked.emit();
  }
}
