import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'donationsStagePipe',
})
export class DonationsStagePipe implements PipeTransform {
  transform(value: string): string {
    if (value === 'registered') {
      return 'Zarejestrowany';
    } else if (value === 'blood examined') {
      return 'Krew zbadana';
    } else if (value === 'qualified') {
      return 'Zakwalifikowany';
    } else if (value === 'abandoned') {
      return 'Porzucony';
    } else if (value === 'donation finished') {
      return 'Zakończony';
    } else if (value === 'not qualified') {
      return 'Niezakwalifikowany';
    } else {
      return value;
    }
  }
}
