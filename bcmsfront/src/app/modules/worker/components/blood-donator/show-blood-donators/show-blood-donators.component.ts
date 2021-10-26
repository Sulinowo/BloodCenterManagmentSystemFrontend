import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Donator } from 'src/app/core/models/donator';

const ELEMENT_DATA: Donator[] = [
  {pesel: '123456789',
    user: {
      id: 1,
      email: 'admin@wp.pl',
      firstName: 'Admin',
      surname: 'Nimda'}
  },
  {pesel: '987654321',
    user: {
      id: 2,
      email: 'siema@wp.pl',
      firstName: 'Nimda',
      surname: 'Admin'}
  },
];


@Component({
  selector: 'app-show-blood-donators',
  templateUrl: './show-blood-donators.component.html',
  styleUrls: ['./show-blood-donators.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowBloodDonatorsComponent implements OnInit {
  @Input() dataSourc? : Donator[] | null;
  @Output() donatorClick = new EventEmitter<Donator>();

  dataSource = ELEMENT_DATA;
  displayedColumns: string[] = ['imie', 'nazwisko', 'pesel', 'email'];
  public searchBloodDonatorForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.searchBloodDonatorForm = this.formBuilder.group({
      pesel: [null],
    });
  }

  public donatorListClick(donator: Donator): void {
    this.donatorClick.emit(donator);
    console.log("siema");
  }
  

  ngOnInit(): void {
  }

}
