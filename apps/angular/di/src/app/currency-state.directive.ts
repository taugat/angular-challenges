import { Directive, Input, Pipe, PipeTransform, inject } from '@angular/core';
import { CurrencyService } from './currency.service';

@Directive({
  selector: '[currencyCode]',
  providers: [CurrencyService],
  standalone: true,
})
export class CurrencyStateDirective {
  currencyService = inject(CurrencyService);

  @Input() set currencyCode(code: string) {
    this.currencyService.setState({ code: code });
  }
}
