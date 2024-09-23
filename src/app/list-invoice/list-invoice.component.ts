import { Component } from '@angular/core';

@Component({
  selector: 'app-list-invoice',
  templateUrl: './list-invoice.component.html',
  styleUrls: ['./list-invoice.component.css'],
})
export class ListInvoiceComponent {
  filterBtn = 'PENDING';
  statusDef = [
    {
      status: 'PENDING',
      color: '-blue-600',
      icon: 'retweet',
    },
    {
      status: 'CANCELLED',
      color: '-pink-600',
      icon: 'close-square',
    },
    {
      status: 'REFUNDED',
      color: '-gray-700',
      icon: 'rollback',
    },
    {
      status: 'PAID',
      color: '-green-600',
      icon: 'check',
    },
  ];
}
