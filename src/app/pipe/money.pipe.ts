import { Pipe, PipeTransform } from '@angular/core';
import { ICurrencySettings, TInvoiceOptions, TInvoiceProducts } from '../types/invoice.model';

@Pipe({
  name: 'money',
})
export class MoneyPipe implements PipeTransform {
  transform(
    value: number,
    {currency,signPlacement}:ICurrencySettings
  ): string {
    return signPlacement === 'before'
      ? `${currency} ${value}`
      : `${value}  ${currency}`;
  }
}
