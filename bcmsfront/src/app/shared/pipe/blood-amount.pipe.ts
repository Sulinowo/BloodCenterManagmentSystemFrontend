import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bloodAmountPipe',
})
export class BloodAmountPipe implements PipeTransform {
  transform(value: number): string {
    if (value >= 0 && value <= 900) {
      return 'https://i.imgur.com/l7rAJeL.png';
    } else if (value >= 901 && value <= 1800) {
      return 'https://i.imgur.com/DU6TJ4D.png';
    } else if (value >= 1801 && value <= 2700) {
      return 'https://i.imgur.com/AZ0HDeh.png';
    } else {
      return 'https://i.imgur.com/KEEiUE9.png';
    }
  }
}
