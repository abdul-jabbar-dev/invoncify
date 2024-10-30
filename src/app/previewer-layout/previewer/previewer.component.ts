import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { format } from 'date-fns';
import { RInvoice } from 'src/app/types/invoice.model';

enum Alignment {
  Center = 'center',
  Bottom = 'flex-end',
  Top = 'flex-start',
}

enum Language {
  English = 'english',
  Hindi = 'hindi',
  Chinese = 'chinese',
}

type AccessibilityOption = {
  label: string;
  value: string;
  checked?: boolean;
};

@Component({
  selector: 'app-previewer',
  templateUrl: './previewer.component.html',
  styleUrls: ['./previewer.component.css'],
})
export class PreviewerComponent implements OnChanges {
  // Temporary currency object
  currency = {
    id: 'f14f88d1-9077-42bd-8519-135956204f33',
    country: 'United States',
    currencyName: 'US Dollar',
    currencySymbol: '$',
    currencyNameShort: 'USD',
    symbolPlacement: 'before' as 'before' | 'after',
  };

  id: string | null = null;
 

  @Input() imgWidth: number = 50;
  @Input() template: string = 'Business';
  @Input() fontSize: number = 12;
  @Input() color: string = '#697689';
  @Input() dateFormat: string = 'MM/dd/yyyy';
  subtotal = 0;
  @Input() language: Language = Language.English;
  @Input() alignment: Alignment = Alignment.Top;
  @Input() accessibility: AccessibilityOption[] = [
    { label: 'Logo', value: 'Logo', checked: true },
    { label: 'Symbol', value: 'Symbol', checked: true },
    { label: 'Recipient', value: 'Recipient', checked: true },
    { label: 'Accent Color', value: 'Accent Color', checked: true },
  ];

  @Input() invoice!: RInvoice;
  isLoading: boolean = false;
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['invoice']?.currentValue) {
      const { products } = changes['invoice'].currentValue as RInvoice;

      this.subtotal = products.reduce(
        (sum, { price, quantity }) => sum + price * quantity,
        0
      );
    }
  }

  getCurrency(amount: string | number) {
    const isSymbolChecked =
      this.accessibility.find((opt) => opt.label === 'Symbol')?.checked ??
      false;
    const symbol = isSymbolChecked
      ? this.currency.currencySymbol
      : this.currency.currencyNameShort;

    return this.currency.symbolPlacement === 'before'
      ? `${symbol}\u00A0${amount}`
      : `${amount}\u00A0${symbol}`;
  }

  hasAccessibility(label: string) {
    return this.accessibility.some((opt) => opt.label === label && opt.checked);
  }

  formattedDate() {
    return format(this.invoice.meta.creationDate as unknown as Date, this.dateFormat);
  }
}
