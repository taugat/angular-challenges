import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Input,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { ListTypedTemplateDirective } from './list-typed-template.directive';

@Component({
  selector: 'list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngFor="let item of list; index as i">
      <ng-container
        *ngTemplateOutlet="
          listTemplateRef || emptyRef;
          context: { $implicit: item, appList: item, index: i }
        ">
      </ng-container>
    </div>

    <ng-template #emptyRef> No Template </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent<TItem extends object> {
  @Input() list!: TItem[];

  @ContentChild(ListTypedTemplateDirective, { read: TemplateRef })
  listTemplateRef!: TemplateRef<unknown>;
}

export type ListContext<T> = {
  $implicit: T;
  appList: T;
  index: number;
};
