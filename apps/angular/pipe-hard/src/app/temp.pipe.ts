import { Pipe, PipeTransform } from '@angular/core';
import {
  PersonUtils,
  PersonUtilsArgs,
  PersonUtilsFunctionName,
  PersonUtilsReturn,
} from './person.utils';

@Pipe({
  standalone: true,
  name: 'personUtils',
})
export class PersonUtilsPipe implements PipeTransform {
  transform<T extends PersonUtilsFunctionName>(
    fun: T,
    ...args: PersonUtilsArgs<T>
  ): PersonUtilsReturn<T> {
    return (<Function>PersonUtils[fun])(...args);
  }
}
