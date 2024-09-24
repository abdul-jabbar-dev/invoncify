import { Component } from '@angular/core';

@Component({
  selector: 'app-list-invoice',
  templateUrl: './list-invoice.component.html',
  styleUrls: ['./list-invoice.component.css'],
})
export class ListInvoiceComponent {
  filterBtn = 'PENDING';
  statusDef: {
    status: string;
    color: string;
    bg: string;
    border: string;
    icon: string;
  }[] = [
    {
      status: 'PENDING',
      color: 'text-blue-600',
      bg: 'bg-blue-600',
      border: 'border-blue-600',
      icon: 'retweet',
    },
    {
      status: 'CANCELLED',
      color: 'text-pink-600',
      bg: 'bg-pink-600',
      border: 'border-pink-600',
      icon: 'close-square',
    },
    {
      status: 'REFUNDED',
      color: 'text-gray-700',
      bg: 'bg-gray-700',
      border: 'border-gray-600',
      icon: 'rollback',
    },
    {
      status: 'PAID',
      color: 'text-green-500',
      bg: 'text-green-500',
      border: 'border-green-500',
      icon: 'check',
    },
  ];
}
