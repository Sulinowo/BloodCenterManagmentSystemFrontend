import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Input() loggedIn = false;
  @Input() role = '';
  @Output() menuClicked = new EventEmitter<void>();

  public onMenuClicked(): void {
    this.menuClicked.emit();
  }
}
