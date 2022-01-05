import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rolePipe',
})
export class RolePipe implements PipeTransform {
  transform(value: string): any {
    if (value === 'Worker') {
      return 'Pracownik';
    } else if (value === 'Admin') {
      return 'Administrator';
    } else {
      return 'Użytkownik';
    }
  }
}
