import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bloodStoragePipe',
})
export class BloodStoragePipe implements PipeTransform {
  transform(value: boolean): any {
    return value ? 'Tak' : 'Nie';
  }
}
