import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-invoice-options',
  templateUrl: './new-invoice-options.component.html',
  styleUrls: ['./new-invoice-options.component.css'],
})
export class NewInvoiceOptionsComponent implements OnInit {
  currencyList: { id: string; currencyName: string }[] = [];
  separator: { id: string; separate: string; label: string }[] = [
    {
      id: '9a7f56b3-7e13-4c8f-a062-bf610d7f3c7b',
      separate: 'coma&dot',
      label: 'string',
    },
    {
      id: '9a7f55b3-7e13-4c8f-a062-bf617d7f3c7b',
      separate: 'dot&coma',
      label: 'string',
    },
    {
      id: '9a7fd5b3-7e13-478f-a062-bf617d7f3c34',
      separate: 'space&dot',
      label: 'string',
    },
  ];

  ngOnInit(): void {
    fetch('assets/json/currency.json')
      .then((res) => res.json())
      .then((res) => {
        this.currencyList = res.map((c: { id: any; currencyName: any }) => ({
          id: c.id,
          currencyName: c.currencyName,
        }));
      })
      .catch((error) => console.error('Error fetching currency data:', error));
  }
}
