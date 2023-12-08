import { Directive, Input } from '@angular/core';
import { ListContext } from './list.component';

@Directive({
  standalone: true,
  selector: 'ng-template[listTypedTemplate]',
})
export class ListTypedTemplateDirective<T> {
  @Input('listTypedTemplate') list!: T[];

  public static ngTemplateContextGuard<T>(
    directive: ListTypedTemplateDirective<T>,
    context: unknown,
  ): context is ListContext<T> {
    return true;
  }
}
