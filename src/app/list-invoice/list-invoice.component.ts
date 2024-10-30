import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../services/invoice.service';
import { IInvoiceStatusCombination } from '../types/invoice.model';

@Component({
  selector: 'app-list-invoice',
  templateUrl: './list-invoice.component.html',
  styleUrls: ['./list-invoice.component.css'],
})
export class ListInvoiceComponent implements OnInit {
  invoices = [];
  filterBtn = 'PENDING';

  statusDef: IInvoiceStatusCombination[] = [
    {
      id: '55d40-4sfsf-5sf50-4sf5a',
      status: 'PENDING',
      color: 'text-blue-600',
      bg: 'bg-blue-600',
      border: 'border-blue-600',
      icon: 'retweet',
    },
    {
      id: '5wr40-4sghd-5sf50-4dh5a',
      status: 'CANCELLED',
      color: 'text-pink-600',
      bg: 'bg-pink-600',
      border: 'border-pink-600',
      icon: 'close-square',
    },
    {
      id: '55s40-4sg4d-5ss50-4s35a',
      status: 'REFUNDED',
      color: 'text-gray-700',
      bg: 'bg-gray-700',
      border: 'border-gray-600',
      icon: 'rollback',
    },
    {
      id: '55d40-fh45g-5sfd0-4sf5a',
      status: 'PAID',
      color: 'text-green-500',
      bg: 'bg-green-500',
      border: 'border-green-500',
      icon: 'check',
    },
  ];

  constructor(protected invoiceRequest: InvoiceService) {}

  ngOnInit(): void {
    this.loadInvoice();
  }

  loadInvoice() {
    this.invoiceRequest.getMyInvoices().subscribe((res) => {
      this.invoices = res.map((ins: any) => {
        const statusCombination = this.statusDef.find(
          (c) => c.status === ins.status
        );
        return {
          ...ins,
          statusCombination,
        };
      }); 
    });
  }
}
