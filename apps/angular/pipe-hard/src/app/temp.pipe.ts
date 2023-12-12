import { Pipe, PipeTransform } from '@angular/core';
import {
  PersonUtilsArgs,
  PersonUtilsFunction,
  PersonUtilsReturn,
} from './person.utils';

@Pipe({
  standalone: true,
  name: 'personUtils',
})
export class PersonUtilsPipe implements PipeTransform {
  transform<T extends PersonUtilsFunction>(
    fun: T,
    ...args: PersonUtilsArgs<T>
  ): PersonUtilsReturn<T> {
    return (fun as (...args: any[]) => any)(...args);
  }
}
