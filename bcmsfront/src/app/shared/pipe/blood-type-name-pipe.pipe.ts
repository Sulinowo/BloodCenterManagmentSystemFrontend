import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bloodTypeNamePipe'
})
export class BloodTypeNamePipePipe implements PipeTransform {

  transform(value: number): string {
    if (value == 1) {
      return '0Rh+';
    } else if (value == 2) {
      return '0Rh-';
    } else if (value == 3) {
      return 'ARh+';
    } else if (value == 4) {
      return 'ARh-';
    } else if (value == 5) {
      return 'BRh+';
    } else if (value == 6) {
      return 'BRh-';
    } else if (value == 7) {
      return 'ABRh+';
    } else {
      return 'ABRh-';
    }
  }

}
