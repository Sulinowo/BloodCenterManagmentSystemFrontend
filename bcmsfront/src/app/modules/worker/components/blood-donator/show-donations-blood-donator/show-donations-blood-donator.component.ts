import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-donations-blood-donator',
  templateUrl: './show-donations-blood-donator.component.html',
  styleUrls: ['./show-donations-blood-donator.component.scss']
})
export class ShowDonationsBloodDonatorComponent implements OnInit {

  columns: string[] = ['dataDonacji', 'etapDonacji', 'powodOdrzuceniaDonacji'];

  constructor() { }

  ngOnInit(): void {
  }

}
