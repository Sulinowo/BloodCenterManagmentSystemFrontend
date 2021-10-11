import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-password-page',
  templateUrl: './set-password-page.component.html',
  styleUrls: ['./set-password-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SetPasswordPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
