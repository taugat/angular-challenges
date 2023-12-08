import { Directive, Input, Type } from '@angular/core';

// @Directive({
//     selector: 'ng-template[typedTemplate]',
//     standalone: true,
// })
export class TypedTemplateDirective<T> {
  // @Input('typedTemplate')
  // typedTemplate!;

  // Make sure the template checker knows the type of the context with which the
  // template of this directive will be rendered
  public static ngTemplateContextGuard<T>(
    directive: TypedTemplateDirective<T>,
    context: unknown,
  ): context is T {
    return true;
  }
}
