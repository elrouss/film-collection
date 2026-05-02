import { Pipe, PipeTransform } from '@angular/core';

import { formatHours, formatMinutes } from './duration-pipe.utils';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const restMinutes = minutes - hours * 60;

    if (hours && restMinutes) {
      return `${formatHours(hours)} ${formatMinutes(restMinutes)}`;
    }

    if (hours) {
      return `${formatHours(hours)}`;
    }

    return `${formatMinutes(restMinutes)}`;
  }
}
