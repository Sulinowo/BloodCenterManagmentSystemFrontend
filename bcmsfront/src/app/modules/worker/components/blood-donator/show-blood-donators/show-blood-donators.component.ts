import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Donator } from 'src/app/core/models/donator';

@Component({
  selector: 'app-show-blood-donators',
  templateUrl: './show-blood-donators.component.html',
  styleUrls: ['./show-blood-donators.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowBloodDonatorsComponent implements OnInit {
  @Input() dataSource: Donator[];
  @Output() donatorClick = new EventEmitter<Donator>();

  displayedColumns: string[] = ['imie', 'nazwisko', 'pesel', 'email'];
  public searchBloodDonatorForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.searchBloodDonatorForm = this.formBuilder.group({
      pesel: [null],
    });
  }

  public donatorListClick(donator: Donator): void {
    this.donatorClick.emit(donator);
    console.log('siema', donator);
  }

  ngOnInit(): void {}
}
