import { Pipe, PipeTransform } from '@angular/core';
import { Donator } from 'src/app/core/models/donator';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(donators: Donator[], searchText: string) {
    return donators.filter(donator =>( 
      donator.pesel.indexOf(searchText) !== -1));
  }
}
