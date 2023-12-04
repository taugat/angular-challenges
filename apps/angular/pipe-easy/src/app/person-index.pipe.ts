import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'personIndex',
})
export class PersonIndexPipe implements PipeTransform {
  transform(name: string, index: number): string {
    return `${name} - ${index}`;
  }
}
