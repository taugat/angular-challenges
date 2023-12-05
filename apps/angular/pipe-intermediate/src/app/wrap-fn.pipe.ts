import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'wrapFn',
})
export class WrapFnPipe implements PipeTransform {
  transform<R>(fn: (...args: any[]) => R, ...args: any[]): R {
    return fn(...args);
  }
}
