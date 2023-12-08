import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, Type } from '@angular/core';
import { ListComponent } from './list.component';
import { PersonComponent, PersonContext } from './person.component';
import { TypedTemplateDirective } from './typed-template.directive';
import { PersonTypedTemplateDirective } from './person-typed-template.directive';
import { ListTypedTemplateDirective } from './list-typed-template.directive';

@Component({
  standalone: true,
  imports: [
    NgTemplateOutlet,
    PersonComponent,
    ListComponent,
    PersonTypedTemplateDirective,
    ListTypedTemplateDirective,
  ],
  selector: 'app-root',
  template: `
    <person [person]="person">
      <ng-template let-name let-age="age" personTypedTemplate>
        {{ name }}: {{ age }}
      </ng-template>
    </person>

    <list [list]="students">
      <ng-template let-student let-i="index" [listTypedTemplate]="students">
        {{ student.name }}: {{ student.age }} - {{ i }}
      </ng-template>
    </list>

    <list [list]="cities">
      <ng-template let-city let-i="index" [listTypedTemplate]="cities">
        {{ city.name }}: {{ city.country }} - {{ i }}
      </ng-template>
    </list>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  person = {
    name: 'toto',
    age: 3,
  };

  students = [
    { name: 'toto', age: 3 },
    { name: 'titi', age: 4 },
  ];

  cities = [
    { name: 'Paris', country: 'France' },
    { name: 'Berlin', country: 'Germany' },
  ];
}
