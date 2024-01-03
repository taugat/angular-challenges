import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-person-row',
  standalone: true,
  imports: [MatListModule],
  template: `
    <div MatListItemLine class="flex justify-between">
      <h3 title="Name">
        {{ name }}
      </h3>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonRowComponent {
  @Input() name!: string;
}
