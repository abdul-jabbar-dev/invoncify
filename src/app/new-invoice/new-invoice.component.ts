import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-new-invoice',
  templateUrl: './new-invoice.component.html',
  styleUrls: ['./new-invoice.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class NewInvoiceComponent {
  isInvoice: any;
  isDueDate: any;
  isCurrency: any;
  isDiscount: any;
  isTax: any;
  isNote: any;
  isPayment: any;
  selectedContact: any;
  isNewContact: boolean = true;

  constructor() {}
}
