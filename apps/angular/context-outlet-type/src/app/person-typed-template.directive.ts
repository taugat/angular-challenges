import { Directive, Input } from '@angular/core';
import { PersonContext } from './person.component';

@Directive({
  standalone: true,
  selector: 'ng-template[personTypedTemplate]',
})
export class PersonTypedTemplateDirective {
  public static ngTemplateContextGuard(
    directive: PersonTypedTemplateDirective,
    context: unknown,
  ): context is PersonContext {
    return true;
  }
}
