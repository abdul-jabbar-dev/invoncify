import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { RInvoice, TInvoiceProducts } from 'src/app/types/invoice.model';

@Component({
  selector: 'app-invoice-card',
  templateUrl: './invoice-card.component.html',
  styleUrls: ['./invoice-card.component.css'],
})
export class InvoiceCardComponent implements OnChanges {
  @Input() item!: RInvoice;
  constructor(
    public router: Router,
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  goToInvoice(arg0: string) {
    window.open('/previewer/' + arg0, '_blank');
  }

  visible: boolean = false;

  clickMe(): void {
    this.visible = false;
  }
  change(value: boolean): void {
    console.log(value);
  }
  copyToClipboard() {
    const content = document.getElementById('content-to-copy')?.innerText;

    if (content) {
      navigator.clipboard
        .writeText(content)
        .then(() => {
          console.log('Content copied to clipboard');
        })
        .catch((err) => {
          console.error('Error copying content: ', err);
        });
    }
  }
  getTotalValue(items: TInvoiceProducts[]) {
    const total = items.reduce(
      (sum, product) => sum + product.price * product.quantity,
      0
    );
    return total;
  }
}
