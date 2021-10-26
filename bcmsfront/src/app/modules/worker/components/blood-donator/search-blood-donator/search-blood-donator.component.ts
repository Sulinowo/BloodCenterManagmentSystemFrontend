import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-blood-donator',
  templateUrl: './search-blood-donator.component.html',
  styleUrls: ['./search-blood-donator.component.scss']
})
export class SearchBloodDonatorComponent {
  
  displayedColumns: string[] = ['imie', 'nazwisko', 'pesel', 'email', 'adres','nrTel','grupaKrwii','iloscOddanejKrwii','edycja'];
  
  public searchBloodDonatorForm: FormGroup

  constructor(private formBuilder: FormBuilder) { 
    this.searchBloodDonatorForm = this.formBuilder.group({
      pesel: [null,Validators.required],
    });
  }

  

}
