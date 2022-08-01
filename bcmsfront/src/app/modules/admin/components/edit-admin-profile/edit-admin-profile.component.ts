import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-edit-admin-profile',
  templateUrl: './edit-admin-profile.component.html',
  styleUrls: ['./edit-admin-profile.component.scss'],
})
export class EditAdminProfileComponent {
  @Output() editClicked = new EventEmitter<void>();

  public onEditClicked(): void {
    this.editClicked.emit();
  }
}
