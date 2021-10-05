import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-homepage-page',
  templateUrl: './homepage-page.component.html',
  styleUrls: ['./homepage-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomepagePageComponent {}
