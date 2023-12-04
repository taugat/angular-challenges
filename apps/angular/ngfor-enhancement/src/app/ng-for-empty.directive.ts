import {
  Directive,
  DoCheck,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  standalone: true,
  selector: '[ngFor]',
})
export class NgForEmptyDirective<T> implements DoCheck {
  @Input() ngForEmpty!: TemplateRef<any>;
  @Input() ngForOf!: T[];

  constructor(private viewContainer: ViewContainerRef) {}

  ngDoCheck(): void {
    if (!this.ngForOf || this.ngForOf.length === 0) {
      this.viewContainer.createEmbeddedView(this.ngForEmpty);
    }
  }
}
