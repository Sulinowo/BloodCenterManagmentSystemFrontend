import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-edit-worker-profile',
  templateUrl: './edit-worker-profile.component.html',
  styleUrls: ['./edit-worker-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditWorkerProfileComponent {
  @Output() editClicked = new EventEmitter<void>();

  public onEditClicked(): void {
    this.editClicked.emit();
  }
}
